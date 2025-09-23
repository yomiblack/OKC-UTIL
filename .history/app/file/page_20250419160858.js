import FilePage from "../filePage/page";
import SideBar from "../component/sidebar";

export default function File() {
  return (
    <div className="bg-none flex relative justify-between">
      <div>
        <SideBar />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <FilePage />
      </div>
    </div>
  );
}
