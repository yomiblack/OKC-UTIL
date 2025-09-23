import { MongoClient } from "mongodb";

export const fileDataSlice = (set, get) => ({
  file: [],
  loading: false,
  error: null,

  getFileData: async () => {
    if (get().loading) return;

    set({ loading: true, error: null });

    let client;

    try {
      client = MongoClient.connect(process.env.MONGODB_URI);
      const db = 
    } catch {
    } finally {
      if (client) {
        await client.close();
      }
    }
  },
});
