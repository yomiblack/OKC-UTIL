import { create } from "zustand";
import { sidebarSlice } from "./sidebarSlice";

const useStore = create((set, get) => ({
  ...sidebarSlice(set, get),
}));

export default useStore;
