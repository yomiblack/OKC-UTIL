import { create } from "zustand";
import { fileDataSlice } from "./fileDataSlice";

const useDataStore = create((set, get) => ({
  ...fileDataSlice(set, get),
}));

// export const useDataAction = () => {
//   useDataStore((state) => state.actions);
// };

export default useDataStore;
