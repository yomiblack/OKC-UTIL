import FilePage from "../filePage/page";
import SideBar from "../component/sidebar";

export default function File() {
  return (
    <div className="flex mt-8">
      <SideBar />
      <FilePage />
    </div>
  );
}
