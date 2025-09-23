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
        throw new Error(data.error);
      }

      set({ files: data.files, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  getfileById: (id) => {
    return get().files.find((files) => files._id === id);
  },
});
