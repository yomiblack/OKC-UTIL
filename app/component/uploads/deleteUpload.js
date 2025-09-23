"use server";
import { MongoClient } from "mongodb";

export default async function deleteUpload(key) {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();

  try {
    const uploadCollection = db.collection("uploads");
    const result = await uploadCollection.updateOne(
      { "uploads.url": key.url }, // Match the document containing the array with the target URL
      { $pull: { uploads: { url: key.url } } } // Remove the object with the matching URL
    );

    if (result.matchedCount > 0 && result.modifiedCount > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  } finally {
    if (client) client.close();
  }

  // const result = key;

  // return result;
}
