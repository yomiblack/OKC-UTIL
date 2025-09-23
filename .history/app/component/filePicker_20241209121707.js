"use client";
import Button from "./button";
import ProceedingsModal from "./modal/proceedingsModal";
import submitUpload from "./uploads/submitUpload";
import getFileData from "./action/getFileData";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FilePicker({
  children,
  handleFileChange,
  fileNames,
  handleSubmit,
  loading,
  handleClick,
  error,
  uploadRef,
  inactiveClass,
  file,
  currentPage,
}) {
  // State for tracking results and success message
  const [result, setResult] = useState(null);
  const [uploadResult, setUploadResult] = useState(null);
  const [uploadData, setUploadData] = useState("");
  const [successMessage, setSuccessMessage] = useState({
    success: "",
    failure: "",
  });
  const router = useRouter();
  const submitUploadForm = async (event) => {
    event.preventDefault();
    let uploadResponse;

    try {
      setSuccessMessage({ success: "", failure: "" }); // Reset the success/failure message
      const submitResult = await handleSubmit(event);

      if (submitResult) {
        setUploadData("Saving your files to the database, please wait...");
        uploadResponse = await submitUpload(submitResult, file._id);

        // Update state with results
        setResult(submitResult);
        setUploadResult(uploadResponse);

        // Set success message
        setSuccessMessage((prev) => ({
          ...prev,
          success: `File${
            submitResult.length > 1 ? "s" : ""
          } Uploaded Successfully!`,
        }));
      }
    } catch (error) {
      // Set failure message
      setSuccessMessage((prev) => ({
        ...prev,
        failure: "An error occurred during the upload.",
      }));
    } finally {
      setUploadData("");

      //fix to re-render component
      //Refetch the data from database
      const result = await getFileData(currentPage, "uploads");
      if (result) router.push(`/file/${currentPage}`);
    }
  };

  return (
    <div className="space-y-4">
      <ProceedingsModal file={file} />

      <form onSubmit={submitUploadForm}>
        <div>
          <Button
            route=""
            type={fileNames.length > 0 ? "submit" : "button"}
            onClick={handleClick}
          >
            {fileNames.length > 0 ? "Upload" : children}
          </Button>
          {loading && (
            <p className="text-green-600 font-bold mt-4">
              Uploading files, please wait...
            </p>
          )}
          {uploadData && (
            <p className="text-green-600 font-bold mt-4 ">{uploadData}</p>
          )}
          {error && <p className="text-red-600 font-bold mt-4">{error}</p>}
          {successMessage.success && (
            <p className="text-green-600 font-bold mt-4">
              {successMessage.success}
            </p>
          )}
          {successMessage.failure && (
            <p className="text-red-600 font-bold mt-4">
              {successMessage.failure}
            </p>
          )}
          <input
            id="upload"
            ref={uploadRef}
            name="upload"
            type="file"
            multiple
            disabled={fileNames.length > 0}
            className={inactiveClass}
            onChange={(event) => handleFileChange(event)}
          />
        </div>
        <div className="w-96 mt-2">
          {fileNames.length > 0 &&
            fileNames.map((fileName, index) => (
              <p
                key={index}
                className="whitespace-nowrap text-ellipsis overflow-hidden"
              >{`${index + 1}. ${fileName.name}`}</p>
            ))}
        </div>
      </form>
    </div>
  );
}
