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
      client = MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db();
      const collection = db.collection(cluster);

      const files = await collection.find{}
    } catch {
    } finally {
      if (client) {
        await client.close();
      }
    }
  },
});
