"use client";
import Modal from "./modal";
import { useState } from "react";

export default function ProceedingsModal({file}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="text-orange-700 hover:text-orange-800 hover:shadow-sm"
      >
        + Add Proceedings
      </button>
      {isModalOpen && <Modal onClose={closeModal} file={file} />}
    </>
  );
}
