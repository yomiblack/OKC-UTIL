export const sidebarSlice = (set, get) => ({
  loading: false,

  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    })),
  selectedComponent: {
    name: "Files",
  },
});
