import FilePage from "../filePage/page";
import SideBar from "../component/sidebar";

export default function File() {
  return (
    <div className="flex justify-between mt-20">
      <div className="fixed md:relative z-10 w-full md:w-1/4 border-r-2 dark:border-slate-800 border-slate-100 text-sm min-h-dvh p-4 bg-gray-50 dark:bg-slate-900  ">
        <SideBar />
      </div>
      <div className="flex flex-1 justify-center items-center w-full md:w-3/4  ">
        <FilePage />
      </div>
    </div>
  );
}
