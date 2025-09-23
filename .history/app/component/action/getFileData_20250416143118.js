"use server";

import { MongoClient, ObjectId } from "mongodb";
async function getFileData(fileSlug, cluster) {
  console.log("fileSlug:", typeof fileSlug, fileSlug, cluster);

  let client;
  // try {
  client = await MongoClient.connect(process.env.MONGODB_URI);

  const db = client.db();
  const data = db.collection(`${cluster}`);

  //selectedComponent
  if (fileSlug && cluster === "files") {
    // console.log("fileSlug file:", typeof fileSlug, fileSlug);

    const fileData = await data.findOne({
      _id: new ObjectId(fileSlug),
    });

    if (fileData) {
      fileData._id = fileData._id.toString();
    }

    return fileData;
  }
  //   //sidebar
  if (fileSlug === null && cluster === "files") {
    const files = await data
      .find({}, { projection: { name: 1 } })
      .sort({ _id: -1 })
      .toArray();

    return files.map((file) => ({ ...file, _id: file._id.toString() }));
    // return files;
  }
  //   //proceedings
  //   if (fileSlug && cluster === "proceedings") {
  //     const proceedings = await data
  //       .find(
  //         { fileId: fileSlug },
  //         { projection: { "proceedings.date": 1, "proceedings.summary": 1 } }
  //       )
  //       .toArray();
  //     if (proceedings) {
  //       return proceedings.map((proceeding) => ({
  //         ...proceeding,
  //         _id: proceeding._id.toString(),
  //       }));
  //     }

  //     return proceedings;
  //   }
  //   //Uploads
  //   if (fileSlug && cluster === "uploads") {
  //     const uploadsData = await data
  //       .find(
  //         { fileId: fileSlug },
  //         { projection: { uploads: 1 } } // Project the entire uploads field
  //       )
  //       .toArray();

  //     if (uploadsData.length > 0) {
  //       // Flatten and extract only the required fields
  //       const uploads = uploadsData.flatMap((doc) =>
  //         doc.uploads.map(({ name, size, date, url }) => ({
  //           name,
  //           size,
  //           date,
  //           url,
  //         }))
  //       );

  //       return uploads; // Return the flattened array of uploads
  //     }
  //   }

  //   return []; // Return an empty array if no matching uploads are found.
  // } finally {
  //   if (client) await client.close();
  // }
}

export default getFileData;
