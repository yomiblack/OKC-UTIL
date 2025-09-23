export const fileDataSlice = (set, get) => ({
  filteredFiles: [],
  searchQuery: "",
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

      set({ files: data.files, loading: false, filteredFiles: data.files });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // Search method (client-side filtering)
  searchQuery: (query) => {
    const optimizedQuery = query.toLowerCase().trim();
    if(!optimizedQuery) {
      set({filteredFiles: files, searchQuery: ""});
    }
  },
  // Get single file by id
  getfileById: (id) => {
    return get().files.find((files) => files._id === id);
  },
  }

});
