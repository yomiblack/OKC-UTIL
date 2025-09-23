import FilePage from "../filePage/page";
import SideBar from "../component/sidebar";

export default function File() {
  return (
    <div className="flex justify-between mt-20">
      <div className="w-full md:max-w-sm">
        <SideBar />
      </div>
      <div className="flex justify-center items-center w-full md:w-dvw  ">
        <FilePage />
      </div>
    </div>
  );
}
