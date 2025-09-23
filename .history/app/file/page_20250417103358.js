import FilePage from "../filePage/page";
import SideBar from "../component/sidebar";

export default function File() {
  return (
    <div className="flex ">
      <SideBar />
      <FilePage />
    </div>
  );
}
