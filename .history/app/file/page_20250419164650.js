import FilePage from "../filePage/page";
import SideBar from "../component/sidebar";

export default function File() {
  return (
    <div className="flex justify-between mt-20">
      <div className=" hidden md:fixed left-0 md:block border-r-2 w-full md:max-w-sm dark:border-slate-800 border-slate-100 text-sm min-h-dvh p-4  ">
        <SideBar />
      </div>
      <div className="flex justify-center items-center w-full md:w-dvw  ">
        <FilePage />
      </div>
    </div>
  );
}
