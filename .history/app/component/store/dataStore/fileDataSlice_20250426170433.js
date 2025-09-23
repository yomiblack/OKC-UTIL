export const fileDataSlice = (set, get) => ({
  files: [],
  loading: false,
  error: null,

  getFileData: async (cluster) => {
    if (get().loading) return;

    set({ loading: true, error: null });

    try {
      const response = await fetch(`/api/files?cluster=${cluster}`);
      const data = await response.json();

      if (data.error) {
        return set({ error: data.error, loading: false });
      }
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
