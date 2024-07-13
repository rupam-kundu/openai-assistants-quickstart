import { openai } from "@/app/openai";
import { client, run } from "@/app/utils/dbConnection";

export const runtime = "nodejs";

// Create a new thread
export async function POST(request) {
  try {
    const { sessionId } = await request.json();
    const thread = await openai.beta.threads.create();
    console.log("Thread id: ", thread.id);
    await client.connect();
    const db = client.db("ai-agent");
    await db.collection('threads').insertOne({
      sessionId: sessionId,
      threadId: thread.id
    });
    return Response.json({ threadId: thread.id });
  } catch (error) {
    console.log(error);
  }
}
