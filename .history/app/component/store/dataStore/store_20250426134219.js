import { create } from "zustand";
import { fileDataSlice } from "./fileSlice";

const useDataStore = create((set, get) => ({
  ...fileDataSlice(set, get),
}));
export default useDataStore;
