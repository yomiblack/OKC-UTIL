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
  searchFiles: (query) => {
    const { files } = get();
    console.log("files", files);

    const normalizedQuery = query.toLowerCase().trim();
    console.log(normalizedQuery);

    if (!normalizedQuery) {
      set({ filteredFiles: files, searchQuery: "" });
      return;
    }

    const result = files.filter(file => 
      file.name.toLowerCase().includes(normalizedQuery);
    );
    console.log("result", result, "files", files);
    set({ filteredFiles: result, searchQuery: normalizedQuery });
  },
  // Get single file by id
  getfileById: (id) => {
    return get().files.find((files) => files._id === id);
  },
});
