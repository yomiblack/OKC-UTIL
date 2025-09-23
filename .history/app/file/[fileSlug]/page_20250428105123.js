// "use client";
import SideBar from "@/app/component/sidebar/sidebar";
import SelectedFileComponent from "@/app/component/selectedFileComponent";
import Uploads from "@/app/component/fileUpload";
import Proceedings from "@/app/component/fileProceedings";
import DummyData from "@/app/component/dummyData";
// import { MongoClient, ObjectId } from "mongodb";
import getFileData from "@/app/component/action/getFileData";
import NotFound from "@/app/component/notFound";
import uploadFileToS3 from "@/app/component/uploads/uploadActions";

export default async function FileProceedings({ params }) {
  const currentPage = params?.fileSlug;
  console.log("currentPage:", currentPage);
  const file = await getFileData(currentPage, "files");
  const data = await getFileData(currentPage, "proceedings");

  const uploadedFile = await getFileData(currentPage, "uploads");
  // console.log("uploadedFile:", uploadedFile);

  if (!file) {
    return <NotFound />;
  }

  return (
    <div className="flex ">
      {/* <div className="">
        <SideBar currentPage={currentPage} />
      </div> */}
      <div className="flex-col w-full md:max-w-md space-y-6">
        <SelectedFileComponent file={file} currentPage={currentPage} />
        {uploadedFile.length > 0 && (
          <Uploads uploadedFile={uploadedFile} currentPage={currentPage} />
        )}
        {data.length > 0 && <Proceedings proceedingsData={data} file={file} />}
      </div>
    </div>
  );
}
