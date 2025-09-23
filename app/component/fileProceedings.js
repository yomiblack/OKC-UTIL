"use client";
import { useState } from "react";
import ProceedingsEditModal from "./modal/proceedingsEditModal";

export default function Proceedings({ proceedingsData, file }) {
  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState(null);
  const [current, setCurrent] = useState({
    summary: null,
    index: null,
  });

  const openModal = (type, summary, index) => {
    setActionType(type);
    setCurrent({
      summary: summary,
      index: index,
    });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrent({
      summary: null,
      index: null,
    });
    setActionType(null);
  };

  let title = "Proceedings";
  let list = proceedingsData.map((summary) =>
    summary.proceedings.map((summaries, index) => (
      <div
        key={index}
        className="flex justify-between items-center p-4 mb-2 rounded-lg bg-white shadow hover:shadow-md transition-shadow duration-300 "
      >
        <div className="flex">
          <li className="flex-none text-orange-800">{summaries.date}</li>
          <li className=" text-orange-600 truncate mx-4 w-[45rem]">
            {summaries.summary}
          </li>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="text-orange-500 hover:text-orange-700 transition-colors duration-200"
            onClick={() => openModal("edit", summaries, index)}
          >
            Edit
          </button>
          <button
            onClick={() => openModal("delete", summaries, index)}
            className="text-red-500 hover:text-red-700 transition-colors duration-200"
          >
            Delete
          </button>
        </div>
        {isOpen && current.index === index && (
          <ProceedingsEditModal
            summaries={current.summary}
            index={current.index}
            file={file}
            actionType={actionType}
            onClose={closeModal}
          />
        )}
      </div>
    ))
  );

  return (
    <div className="bg-gray-100 mb-6 p-8 rounded-xl shadow-lg border-l-4 border-orange-500 ">
      <header className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-orange-700 border-b-2 border-orange-300 pb-2">
          {title}
        </h2>
      </header>
      <ul className="space-y-4 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200">
        {list}
      </ul>
    </div>
  );
}
