import SideBar from "../sidebar/page";
import BillPage from "../billPage/page";

export default function Bill() {
  return (
    <div className="flex mt-8">
      <SideBar />
      <BillPage />
    </div>
  );
}
