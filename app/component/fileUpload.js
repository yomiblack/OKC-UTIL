"use client";

import { useState } from "react";
import DeleteModal from "./uploads/deleteModal";

export default function Uploads({ uploadedFile, currentPage }) {
  const [isModalOPen, setisModalOPen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [updateUploadedFile, setUpdateUploadedFile] = useState(uploadedFile);

  const openModal = (data) => {
    setSelectedData(data);
    setisModalOPen(true);
  };
  const closeModal = () => {
    setSelectedData(null);
    setisModalOPen(false);
  };

  let title = "Uploaded Documents";
  let list = updateUploadedFile.map((data, index) => (
    <div
      key={index}
      className="flex justify-between items-center p-4 mb-2 rounded-lg bg-white shadow hover:shadow-md transition-shadow duration-300 "
    >
      <div className="flex gap-2">
        <li className="text-orange-800">{data.date}</li>
        <li className="text-orange-600 truncate">{data.name}</li>
      </div>
      <div className="flex gap-2 ">
        <button>Preview</button>

        <button>
          <a>Download</a>
        </button>

        <button
          className="text-red-500 hover:text-red-700 transition-colors duration-200"
          // onClick={(event) => handleDelete(event, data)}
          onClick={() => openModal(data)}
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    list && (
      <div className="bg-gray-100 mb-6 p-8 rounded-xl shadow-lg border-r-4 border-orange-500">
        <header className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-orange-700 border-b-2 border-orange-300 pb-2">
            {title}
          </h2>
        </header>
        <ul className="space-y-4 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200">
          {list}
        </ul>
        {isModalOPen && selectedData && (
          <DeleteModal
            onClose={closeModal}
            data={selectedData}
            updateUploadedFile={updateUploadedFile}
            setUpdateUploadedFile={setUpdateUploadedFile}
            currentPage={currentPage}
          />
        )}
      </div>
    )
  );
}
