import { useState } from "react";
import { handleFormSubmit } from "../action/formSubmit";
import Input from "../input";
import SubmitButton from "../submitButton";
import Textarea from "../textarea";

export default function ProceedingsEditModal({
  onClose,
  file,
  summaries,
  index,
  actionType,
}) {
  const [isValue, setIsValue] = useState({
    date: summaries?.date || "",
    summary: summaries?.summary || "",
  });

  const data = file;

  async function handleProceedingsEdit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // const action = event.nativeEvent.submitter.value;

    // if (actionType === "edit") {
    await handleFormSubmit(formData, data._id, index, actionType);
    // } else if (actionType === "delete") {
    //   await handleFormSubmit(formData, data._id, index, actionType);
    // }
    onClose();
  }

  return (
    <form
      onSubmit={handleProceedingsEdit}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        className="absolute inset-0 bg-gray-800 opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-xl p-8">
        <menu className="flex gap-4 justify-end items-center mb-6">
          {actionType === "delete" ? (
            <p className="text-red-500">
              Are you sure you want to delete this proceeding and its
              corresponding data? NOTE that this action cannot be undone!
            </p>
          ) : (
            ""
          )}
          <button
            onClick={onClose}
            href=""
            className="text-orange-700 hover:text-orange-800 hover:shadow-sm"
          >
            Cancel
          </button>
          <SubmitButton
            label={actionType === "edit" ? "Save" : "Delete"}
            route=""
            type="submit"
            // name="action"
            // value={actionType === "edit" ? "save" : "delete"}
          />
        </menu>

        <div className=" bg-gray-50 p-6 rounded-lg shadow-md">
          <header className="block text-xl font-medium text-gray-700 mb-12 space-y-2 ">
            <p>{`File number: ${data.number}`}</p>
            <p>{`File Name: ${data.name}`}</p>
            <p>{`Date Created: ${data.date}`}</p>
          </header>
          <main>
            <div className="text-left mb-6">
              <Input
                name="proceedingsEditDate"
                type="date"
                onChange={(e) =>
                  setIsValue({ ...isValue, date: e.target.value })
                }
                value={isValue.date}
                readonly={actionType === "delete"}
              >
                {actionType === "edit" ? "Edit Date" : ""}
              </Input>
              <Textarea
                name="proceedingsEditSummary"
                type="text"
                onChange={(e) =>
                  setIsValue({ ...isValue, summary: e.target.value })
                }
                value={isValue.summary}
                readonly={actionType === "delete"}
              >
                {actionType === "edit" ? "Edit Summary" : ""}
              </Textarea>
            </div>
          </main>
        </div>
      </div>
    </form>
  );
}
