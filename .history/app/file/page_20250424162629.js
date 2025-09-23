"use client";
import FilePage from "../filePage/page";
import SideBar from "../component/sidebar/sidebar";
import useStore from "../component/store/store";

export default function File() {
  const { isSidebarOpen } = useStore();

  return (
    <div className="flex mt-20">
      {/* Sidebar (Hidden on mobile unless `isSidebarOpen`, always visible on md+) */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-1/4 border-r-2 dark:border-slate-800 border-slate-200 text-sm min-h-dvh p-4 bg-gray-50 dark:bg-slate-900`}
      >
        <SideBar />
      </div>

      {/* Main Content (Full width on mobile, 3/4 on md+ when sidebar is open) */}
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
