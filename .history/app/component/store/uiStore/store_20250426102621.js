import { create } from "zustand";
import { sidebarStore } from "./sidebarSlice";

const useStore = create((set, get) => ({
  ...sidebarStore(set, get),
}));

export default useStore;
