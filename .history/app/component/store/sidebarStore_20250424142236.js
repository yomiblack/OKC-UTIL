export const sidebarStore = (set) => ({
  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
      // console.log("Sidebar toggled!"),
    })),
});
