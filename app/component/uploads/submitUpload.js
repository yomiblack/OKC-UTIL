"use server";
import { MongoClient } from "mongodb";

export default async function submitUpload(data, id) {
  // console.log(data);
  let client;
  try {
    client = await MongoClient.connect(process.env.MONGODB_URI);

    const db = client.db();
    const uploadCollection = db.collection("uploads");

    const existingUpload = await uploadCollection.findOne({
      fileId: id,
    });

    const uploadData = {
      fileId: id,
      uploads: [],
    };

    let result;

    if (existingUpload) {
      result = await uploadCollection.updateOne(
        { fileId: id },
        { $push: { uploads: { $each: data, $position: 0 } } }
      );
    } else {
      uploadData.uploads = data;
      result = await uploadCollection.insertOne(uploadData);
    }
    return result;
  } catch (error) {
    console.error("Error Uploading the files:", error);
    throw error;
  } finally {
    if (client) {
      await client.close();
    }
  }
}
