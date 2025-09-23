import FilePage from "../filePage/page";
import SideBar from "../component/sidebar";

export default function File() {
  return (
    <div className="flex absolute">
      <div></div>
      <SideBar />
      <FilePage />
    </div>
  );
}
