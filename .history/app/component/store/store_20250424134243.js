import create from "zustand";
import { sidebarStore } from "./sidebarStore";

const useStore = create((set, get) => ({
  ...sidebarStore(set, get),
  // Add any other stores or state management logic here
  // For example, you can add a store for managing user authentication, etc.
}));

export default useStore;
