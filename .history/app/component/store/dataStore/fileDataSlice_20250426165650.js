export const fileDataSlice = (set, get) => ({
  files: [],
  loading: false,
  error: null,

  getFileData: async (cluster) => {
    if (get().loading) return;

    set({ loading: true, error: null });

    let client;

    try {
      const response = await 
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
