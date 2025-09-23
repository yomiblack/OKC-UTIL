import { create } from "zustand";
import { sidebarStore } from "./uiStore/sidebarStore";

const useStore = create((set, get) => ({
  ...sidebarStore(set, get),
}));

export default useStore;
