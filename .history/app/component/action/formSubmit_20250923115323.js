"use server";
import { MongoClient, ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { connectToDatabase } from "@/app/lib/mongodb";

export async function handleFormSubmit(
  formData,
  fileId,
  index = null,
  actionType = null
) {
 
  // const client = await MongoClient.connect(process.env.MONGODB_URI);
  // const db = client.db();

  try {

    const {client: dbClient, db} = await connectToDatabase();
    // const {client} = await connectToDatabase();
    // console.log("Database connected:", client);
    client = dbClient;
    const data = {
      number: formData.get("fileNumber")?.toUpperCase(),
      name: formData.get("fileName")?.toUpperCase(),
      date: formData.get("date"),
    };

    const newProceedings = {
      date: formData.get("proceedingsDate"),
      summary: formData.get("summary"),
    };

    const editProceedings = {
      proceedingsEditDate: formData.get("proceedingsEditDate"),
      proceedingsEditSummary: formData.get("proceedingsEditSummary"),
    };

    const proceedingsData = {
      fileId: fileId,
      proceedings: [],
    };

    //New insert and Edit Insert
    if (data.number && data.name && data.date) {
      const filesCollection = db.collection("files");
      const existingFile = await filesCollection.findOne({
        _id: new ObjectId(fileId),
      });

      if (existingFile) {
        const isSameData =
          existingFile.number === data.number &&
          existingFile.name === data.name &&
          existingFile.date === data.date;

        if (isSameData) {
          return;
        } else {
          const result = await filesCollection.updateOne(
            { _id: new ObjectId(fileId) },
            { $set: { number: data.number, name: data.name, date: data.date } }
          );

          if (result.modifiedCount > 0) {
            redirect(`/file/${existingFile._id}`);
          }
        }
      } else {
        const result = await filesCollection.insertOne(data);
        redirect(`/file/${result.insertedId}`);
      }
    }

    //Proceedings Insert and Update Array
    if (newProceedings.date && newProceedings.summary) {
      const proceedingsCollection = db.collection("proceedings");
      const existingDocument = await proceedingsCollection.findOne({ fileId });

      let result;
      if (existingDocument) {
        result = await proceedingsCollection.updateOne(
          { fileId },
          { $push: { proceedings: { $each: [newProceedings], $position: 0 } } }
        );
      } else {
        proceedingsData.proceedings.push(newProceedings);
        result = await proceedingsCollection.insertOne(proceedingsData);
      }
      const success =
        result.acknowledged && (result.modifiedCount > 0 || result.insertedId);
      if (success) {
        redirect(`/file/${fileId}`);
      }
      return result;
    }

    //Update Proceedings Summary and Date
    if (
      editProceedings.proceedingsEditDate &&
      editProceedings.proceedingsEditSummary &&
      Number.isInteger(index) &&
      actionType === "edit"
    ) {
      const proceedingsCollection = db.collection("proceedings");
      const existingDocument = await proceedingsCollection.findOne({ fileId });

      if (
        existingDocument &&
        index >= 0 &&
        index < existingDocument.proceedings.length
      ) {
        const updatedProceedings = `proceedings.${index}`;

        const result = await proceedingsCollection.updateOne(
          { fileId: fileId },
          {
            $set: {
              [updatedProceedings]: {
                date: editProceedings.proceedingsEditDate,
                summary: editProceedings.proceedingsEditSummary,
              },
            },
          }
        );

        if (result.modifiedCount > 0 && result.acknowledged) {
          redirect(`/file/${fileId}`);
        }
      }
    }

    //Delete Proceedings
    if (actionType === "delete") {
      const proceedingsCollection = db.collection("proceedings");
      const existingDocument = await proceedingsCollection.findOne({ fileId });
      if (
        existingDocument &&
        index >= 0 &&
        index < existingDocument.proceedings.length
      ) {
        const objectToDelete = existingDocument.proceedings[index];
        const result = await proceedingsCollection.updateOne(
          { fileId: fileId },
          { $pull: { proceedings: objectToDelete } }
        );
        if (result.modifiedCount > 0) {
          redirect(`/file/${fileId}`);
        }
      }
    }
  } finally {
    // client.close();
  }
}
