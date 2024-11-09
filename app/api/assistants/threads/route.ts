import { openai } from "@/app/openai";
import { client, run } from "@/app/utils/dbConnection";

export const runtime = "nodejs";

// Create a new thread
export async function POST(request) {
  try {
    const { username, useremail } = await request.json();
    const thread = await openai.beta.threads.create();
    console.log("Thread id: ", thread.id);
    await client.connect();
    const db = client.db("ai-agent");
    await db.collection('threads').insertOne({
      threadId: thread.id,
      username: username,
      useremail: useremail
    });
    return Response.json({ threadId: thread.id });
  } catch (error) {
    console.log(error);
  }
}
