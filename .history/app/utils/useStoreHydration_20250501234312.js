import { useEffect, useState } from "react";
import useDataStore from "../component/store/dataStore/store";

export const useStoreHydration = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Zustand persists the store on client-side after mount
    const unsubscribe = useDataStore.persist.onFinishHydration(() => {
      setIsHydrated(true);
    });
    return () => unsubscribe();
  }, []);

  return isHydrated;
};
