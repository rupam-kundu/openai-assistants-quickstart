import { openai } from "@/app/openai";
import { client, run } from "@/app/utils/dbConnection";

export const runtime = "nodejs";

// run().catch(console.dir);

// Create a new thread
export async function POST() {
  try {
    const thread = await openai.beta.threads.create();
    console.log("Thread id: ", thread.id);
    await client.connect();
    const db = client.db("ai-agent");
    await db.collection('threads').insertOne({
      threadId: thread.id
    });
    return Response.json({ threadId: thread.id });
  } catch (error) {
    console.log(error);
  }
}
