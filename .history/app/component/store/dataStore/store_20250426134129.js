import { create } from "zustand";
import { fileData } from "./fileSlice";

const useDataStore = create((set, get) => ({
  ...fileData(set, get),
}));
export default useDataStore;
