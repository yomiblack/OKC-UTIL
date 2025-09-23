"use server";
import { MongoClient } from "mongodb";

export const fileDataSlice = (set, get) => ({
  file: [],
  loading: false,
  error: null,

  getFileData: async (cluster) => {
    if (get().loading) return;

    set({ loading: true, error: null });

    let client;

    try {
      client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db();
      const collection = db.collection(cluster);

      const files = await collection
        .find({}, { projection: { name: 1 } })
        .sort({ _id: -1 })
        .toArray();

      set({
        files: files.map((file) => ({
          ...file,
          _id: file._id.toString(),
        })),
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    } finally {
      if (client) {
        await client.close();
      }
    }
  },

  getfileById: (id) => {
    return get().files.find((files) => files._id === id);
  },
});
