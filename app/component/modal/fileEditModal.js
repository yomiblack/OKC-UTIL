import { useState } from "react";
import { handleFormSubmit } from "../action/formSubmit";
import Input from "../input";
import SubmitButton from "../submitButton";

export default function FileEditModal({ onClose, file }) {
  // console.log("editmodal", typeof file._id, file._id);

  const [isValue, setIsValue] = useState({
    number: file?.number || "",
    name: file?.name || "",
    date: file?.date || "",
  });

  const data = file;

  async function handleFileEdit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    await handleFormSubmit(formData, data._id);
    onClose();
  }

  return (
    <form
      onSubmit={handleFileEdit}
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
          <SubmitButton label="Save" route="" type="submit" />
        </menu>

        <div className="text-left mb-6">
          <Input
            name="fileNumber"
            type="text"
            onChange={(e) => setIsValue({ ...isValue, number: e.target.value })}
            value={isValue.number}
          >
            File No.
          </Input>
          <Input
            name="fileName"
            type="text"
            onChange={(e) => setIsValue({ ...isValue, name: e.target.value })}
            value={isValue.name}
          >
            File Name
          </Input>
          <Input
            name="date"
            type="date"
            onChange={(e) => setIsValue({ ...isValue, date: e.target.value })}
            value={isValue.date}
          >
            Date
          </Input>
        </div>
      </div>
    </form>
  );
}
