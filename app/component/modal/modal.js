import { handleFormSubmit } from "../action/formSubmit";
import Input from "../input";
import SubmitButton from "../submitButton";
import Textarea from "../textarea";

export default function Modal({ onClose, file, proceedingsData }) {
  // console.log(proceedingsData.proceedings);
  const data = file;

  async function handleProceedings(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const result = await handleFormSubmit(formData, file._id);
    if (!result) {
      onClose();
    }
  }

  return (
    <form
      onSubmit={handleProceedings}
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

        <div className=" bg-gray-50 p-6 rounded-lg shadow-md">
          <header className="block text-xl font-medium text-gray-700 mb-12 space-y-2 ">
            <p>{`File number: ${data.number}`}</p>
            <p>{`File Name: ${data.name}`}</p>
            <p>{`Date Created: ${data.date}`}</p>
          </header>
          <main>
            <Input type="date" name="proceedingsDate" />
            <Textarea name="summary">Enter Summary</Textarea>
          </main>
        </div>
      </div>
    </form>
  );
}
