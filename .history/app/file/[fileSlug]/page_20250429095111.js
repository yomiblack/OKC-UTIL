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
  // const file = await getFileData(currentPage, "files");
  // const data = await getFileData(currentPage, "proceedings");

  // const uploadedFile = await getFileData(currentPage, "uploads");

  // if (!file) {
  //   return <NotFound />;
  // }

  return (
    <div className="flex flex-col w-full md:max-w-5xl m-3 md:m-0 space-y-6">
      {/* <SelectedFileComponent file={file} currentPage={currentPage} /> */}
      {/* {uploadedFile.length > 0 && (
        <Uploads uploadedFile={uploadedFile} currentPage={currentPage} />
      )}
      {data.length > 0 && <Proceedings proceedingsData={data} file={file} />} */}
    </div>
  );
}
