import deleteUpload from "./deleteUpload";
import getFileData from "../action/getFileData";
import SubmitButton from "../submitButton";

export default function DeleteModal({
  onClose,
  setUpdateUploadedFile,
  currentPage,
  data,
}) {
  const key = data;

  //Delete file from AWS
  async function handleDelete(event) {
    event.preventDefault();
    // const result = await deleteFileFromS3(key.url); //check versionning to confirm delete

    //call database to delete file as well here
    const deleteResult = await deleteUpload(key);

    if (deleteResult) {
      const result = await getFileData(currentPage, "uploads");
      if (result) {
        setUpdateUploadedFile(result);
        onClose();
      }
    }
  }
  return (
    <form
      onSubmit={handleDelete}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        className="absolute inset-0 bg-gray-800 opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-xl p-8">
        <menu className="flex gap-4 justify-end items-center mb-6">
          <button
            onClick={onClose}
            href=""
            className="text-orange-700 hover:text-orange-800 hover:shadow-sm"
          >
            Cancel
          </button>
          <SubmitButton label="Delete" route="" type="submit" />
          <h2>{`Are you sure you want to delete ${key.name}?`}</h2>
          <p>This action cannot be undone</p>
        </menu>
      </div>
    </form>
  );
}
