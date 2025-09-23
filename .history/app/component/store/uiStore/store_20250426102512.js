import { create } from "zustand";
import { sidebarStore } from "../sidebarStore";

const useStore = create((set, get) => ({
  ...sidebarStore(set, get),
}));

export default useStore;
