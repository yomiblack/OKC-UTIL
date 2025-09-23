import { create } from "zustand";
import persist from "zustand/middleware";
import { fileDataSlice } from "./fileDataSlice";

const useDataStore = create(
  persist((set, get) => ({
    ...fileDataSlice(set, get),
  })  { name: "fileDataStorage", partialize: (state) => ({ files: state.files }) }
)
);

// export const useDataAction = () => {
//   useDataStore((state) => state.actions);
// };

export default useDataStore;
