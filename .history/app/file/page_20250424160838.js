'use client';
import FilePage from "../filePage/page";
import SideBar from "../component/sidebar/sidebar";
import useStore from "../component/store/store";


let files = [];
export default function File() {
  const { isSidebarOpen } = useStore();
  data().then((resolvedFiles) => {
    files = resolvedFiles;
  });
  console.log("Sidebar data", files, isSidebarOpen);
  return (
    <div className="flex justify-between mt-20">
      <div className="hidden md:block w-full md:w-1/4 border-r-2 dark:border-slate-800 border-slate-200 text-sm min-h-dvh p-4 bg-gray-50 dark:bg-slate-900">
        <SideBar />
      </div>

      <div className="w-full md:w-3/4 mt-[50%] md:mt-20">
        <div className="flex justify-center items-center">
          <FilePage />
        </div>
      </div>
    </div>
  );
}
