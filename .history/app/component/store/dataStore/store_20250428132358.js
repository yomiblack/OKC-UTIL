import { create } from "zustand";
import { fileDataSlice } from "./fileDataSlice";

const useDataStore = create((set, get) => ({
  ...fileDataSlice(set, get),
}));
export default useDataStore;

export const useDataAction = () => {
  useDataStore((state) => ())
}
