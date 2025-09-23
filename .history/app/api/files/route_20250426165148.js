import { MongoClient, mongoclient } from "mongodb";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const cluster = searchParams.get("cluster");

  let client;

  try {
    client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const collection = db.collection(cluster);

    const files = await collection
      .find({}, { projection: { name: 1 } })
      .sort({ _id: -1 })
      .toArray();

    return Response.json({
      files:
    });
  } catch {
  } finally {
    if (client) {
      await client.close();
    }
  }
}
