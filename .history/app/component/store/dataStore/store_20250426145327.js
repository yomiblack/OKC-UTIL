import { create } from "zustand";
import { fileDataSlice } from "./fileDataSlice";
import { useEffect } from "react";

const useDataStore = create((set, get) => ({
  useEffect(() => {
    
  })
  ...fileDataSlice(set, get),
}));
export default useDataStore;
