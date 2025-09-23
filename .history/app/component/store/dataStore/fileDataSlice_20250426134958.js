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
    } catch {
    } finally {
      if (client) {
        await client.close();
      }
    }
  },
});
