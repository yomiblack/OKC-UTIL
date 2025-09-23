import FilePage from "../filePage/page";
import SideBar from "../component/sidebar/sidebar";

export default function File() {
  return (
    <div className="flex justify-between mt-20">
      {isSidebarOpen && (
        <div className="hidden md:block w-full md:w-1/4 border-r-2 dark:border-slate-800 border-slate-200 text-sm min-h-dvh p-4 bg-gray-50 dark:bg-slate-900">
          <SideBar />
        </div>
      )}
      <div className="w-full md:w-3/4 mt-[50%] md:mt-20">
        <div className="flex justify-center items-center">
          <FilePage />
        </div>
      </div>
    </div>
  );
}
