import { create } from "zustand";
import persist from "zustand/middleware";
import { fileDataSlice } from "./fileDataSlice";

const useDataStore = create((set, get) => ({
  ...fileDataSlice(set, get),
}));

// export const useDataAction = () => {
//   useDataStore((state) => state.actions);
// };

export default useDataStore;
