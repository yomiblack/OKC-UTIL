import FilePage from "../filePage/page";
import SideBar from "../component/sidebar";

export default function File() {
  return (
    <div className="flex bg-gray-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200">
      <SideBar />
      <FilePage />
    </div>
  );
}
