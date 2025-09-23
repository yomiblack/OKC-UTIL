import FilePage from "../filePage/page";
import SideBar from "../component/sidebar";

export default function File() {
  return (
    <div className="flex relative justify-between mt-20">
      <div className="w-full md:max-w-sm">
        <SideBar />
      </div>
      <div className="flex ">
        <FilePage />
      </div>
    </div>
  );
}
