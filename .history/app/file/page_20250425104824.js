"use client";
import FilePage from "../filePage/page";
import SideBar from "../component/sidebar/sidebar";
import useStore from "../component/store/store";
import { useShallow } from "zustand/react/shallow";

export default function File() {
  const { isSidebarOpen } = useStore(useShallow);

  return (
    <div className="flex justify-between mt-20">
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-1/4 border-r-2 dark:border-slate-800 border-slate-200 text-sm min-h-dvh p-4 bg-gray-50 dark:bg-slate-900 z-10 md:z-0`}
      >
        <SideBar />
      </div>

      <div
        className={`${
          isSidebarOpen ? "hidden md:block" : "block"
        } w-full md:w-3/4`}
      >
        <div className="flex justify-center items-center mt-[50%] md:mt-20">
          <FilePage />
        </div>
      </div>
    </div>
  );
}
