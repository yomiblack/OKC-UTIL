"use client";
import theme from "../../utils/theme";
import Button from "../button";
import useDataStore from "../store/dataStore/store";
import Link from "next/link";
import NotFound from "../notFound";

export default function SelectedFileComponent({ currentPage }) {
  const { getFileById } = useDataStore((state) => state.actions);
  const data = getFileById(currentPage);

  if (!data) {
    return <NotFound />;
  }

  return (
    <div className={`${theme()} flex flex-col p-6 rounded-lg shadow-2xl`}>
      <menu className="flex justify-between items-center mb-10">
        <Link
          href=""
          className="w-6 h-6 bg-orange-700 hover:bg-orange-800 hover:shadow-lg rounded-full p-4 duration-150"
        >
          Edit
        </Link>

        {/* <SubmitButton label="Close" route="/file" type="submit" /> */}
        <Link href="/file">
          <img
            src="/utils/close.svg"
            alt="close icon"
            className="w-6 h-6 bg-orange-700 hover:bg-orange-800 hover:shadow-lg rounded-full p-1  duration-150"
          />
        </Link>
      </menu>
      <header className="flex flex-col text-xl font-medium mb-6 space-y-2 ">
        <p>{`File number: ${data.number}`}</p>
        <p>{`File Name: ${data.name}`}</p>
        <p>{`Date Created: ${data.date}`}</p>
      </header>

      <div className="flex flex-col justify-center md:justify-start items-center md:flex-row w-full md:w-fit md:space-x-4 space-y-4 md:space-y-0">
        <button
          type="button"
          className="flex justify-center items-center text-orange-700 hover:text-orange-800 hover:shadow-sm"
        >
          + Add Proceedings
        </button>

        <Button children={`+Upload Documents`}></Button>
      </div>
    </div>
  );
}

// ============================================================
// "use client";
// import Link from "next/link";
// import ProceedingsModal from "./modal/proceedingsModal";
// import FilePicker from "./filePicker";
// import SubmitButton from "./submitButton";
// import { useState, useRef } from "react";
// import FileEditModal from "./modal/fileEditModal";
// import uploadFileToS3 from "./uploads/uploadActions";

// import theme from "../utils/theme";
// import Button from "./button";
// import useDataStore from "./store/dataStore/store";

// export default function SelectedFileComponent({ currentPage, file }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [fileNames, setFileNames] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fileData = file;

//   const inactiveClass = "opacity-0";

//   const uploadRef = useRef();

//   const data = file;

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

//   async function fileToBuffer(file) {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = reject;
//       reader.readAsArrayBuffer(file);
//     });
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();

//     setLoading(true);
//     setError("");

//     const metadata = { id: fileData._id, name: fileData.name };
//     const uploadedFiles = [];

//     for (const file of fileNames) {
//       try {
//         const uniqueKey = `${metadata.id}-${Date.now()}-${file.name.replace(
//           /\s+/g,
//           "-"
//         )}`;

//         const buffer = await fileToBuffer(file);

//         const fileUrl = await uploadFileToS3(
//           { buffer, mimetype: file.type },
//           uniqueKey
//         );

//         uploadedFiles.push({
//           name: file.name,
//           date: new Date(Date.now()).toLocaleString(),
//           size: file.size,
//           url: fileUrl,
//         });
//       } catch (error) {
//         setError("An error occurred during upload. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     setFileNames([]); // Clear the selected files
//     return uploadedFiles; // Return the array of uploaded files
//   }

//   function handleClick() {
//     uploadRef.current.click();
//   }

//   function handleFileChange(event) {
//     setError("");
//     const files = Array.from(event.target.files);

//     if (files) {
//       setFileNames(files);
//     }
//   }

//   return (
//     <div className={`${theme()} flex flex-col p-6 rounded-lg shadow-2xl`}>
//       {isOpen && <FileEditModal onClose={closeModal} file={file} />}

//       <menu className="flex gap-4 justify-end items-center ">
//         <Link
//           href=""
//           className="text-orange-700 hover:text-orange-800 hover:shadow-sm"
//           onClick={openModal}
//         >
//           Edit
//         </Link>

//         <SubmitButton label="Close" route="/file" type="submit" />
//       </menu>
//       <header className="flex flex-col text-xl font-medium mb-6 space-y-2 ">
//         <p>{`File number: ${data.number}`}</p>
//         <p>{`File Name: ${data.name}`}</p>
//         <p>{`Date Created: ${data.date}`}</p>
//       </header>

//       <div className="flex flex-col justify-center md:justify-start items-center md:flex-row w-full md:w-fit md:space-x-4 space-y-4 md:space-y-0">
//         <button
//           type="button"
//           className="flex justify-center items-center text-orange-700 hover:text-orange-800 hover:shadow-sm"
//         >
//           + Add Proceedings
//         </button>

//         <Button children={`+Upload Documents`}></Button>
//       </div>
//     </div>
//   );
// }
