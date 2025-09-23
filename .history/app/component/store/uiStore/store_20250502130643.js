import { create } from "zustand";
import { sidebarSlice } from "./sidebarSlice";
import { selectedComponentSlice } from "./selectedComponentSlice";

const useUiStore = create((set, get) => ({
  ...sidebarSlice(set, get),
  ...selectedConponentSlice(set, get),
}));

export default useUiStore;
