import { useMemo } from "react";

export const fileDataSlice = (set, get) => ({
  filteredFiles: [],
  searchQuery: "",
  files: [],
  loading: false,
  error: null,

  actions: {
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

      const normalizedQuery = query.toLowerCase().trim();

      if (!normalizedQuery) {
        set({ filteredFiles: files, searchQuery: "" });
        return;
      }

      const result = files.filter((file) =>
        file.name.toLowerCase().includes(normalizedQuery)
      );
      set({ filteredFiles: result, searchQuery: normalizedQuery });
    },

    // Get single file by id
    getFileById: (id) => {
      const foundFile = useMemo(() =>
        get().files.find((files) => files._id === id)
      );
      return foundFile;
    },
  },
});
