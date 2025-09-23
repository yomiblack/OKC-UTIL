import FilePage from "../filePage/page";
import SideBar from "../component/sidebar";

export default function File() {
  return (
    <div className="flex absolute">
      <div>
        <SideBar />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <FilePage />
      </div>
    </div>
  );
}
