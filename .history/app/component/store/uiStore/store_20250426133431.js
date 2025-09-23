import { create } from "zustand";
import { sidebarSlice } from "./sidebarSlice";

const useUiStore = create((set, get) => ({
  ...sidebarSlice(set, get),
}));

export default useUiStore;
