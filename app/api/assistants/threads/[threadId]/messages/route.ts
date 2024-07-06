import { assistantId } from "@/app/assistant-config";
import { openai } from "@/app/openai";
import { client, run } from "@/app/utils/dbConnection";

export const runtime = "nodejs";


// Send a new message to a thread
export async function POST(request, { params: { threadId } }) {
  const { content } = await request.json();
  let assistantMessage = "";

  await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: content
  });

  await client.connect();
  const db = client.db("ai-agent");

  const stream = openai.beta.threads.runs.stream(threadId, {
    assistant_id: assistantId
  });

  stream.on("textDelta", (delta) => {
    if (delta.value != null) {
      assistantMessage += delta.value;
    }
    if (delta.annotations != null) {
      assistantMessage += delta.annotations;
    }
  });

  stream.on("event", (event) => {
    if (event.event === 'thread.run.completed') {
      console.log("Assistant message: ", assistantMessage);
      console.log("Event: ", event);
      if (threadId === event.data.thread_id) {
        const saveMessages = async () => {
          await db.collection('messages').insertOne({
            threadId: threadId,
            runId: event.data.id,
            userMessage: content,
            assistantMessage: assistantMessage
          });
        };
        saveMessages();
      }
    }
  }
  );

  return new Response(stream.toReadableStream());
}
