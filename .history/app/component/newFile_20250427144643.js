import Link from "next/link";
import Input from "./input";
import { handleFormSubmit } from "./action/formSubmit";
import SubmitButton from "./submitButton";

export default function CourtFile() {
  return (
    <form
      action={handleFormSubmit}
      className="w-1/3 bg-gray-50 mb-4 p-6 rounded-lg shadow-md"
    >
      <menu className="flex gap-4 justify-end items-center mb-6">
        <Link
          href="/filePage"
          className="text-orange-700 hover:text-orange-800 hover:shadow-sm"
        >
          Cancel
        </Link>
        <SubmitButton route="" type="submit" label="Save" />
      </menu>

      <div className="text-left mb-6">
        <Input name="fileNumber" type="text">
          File No.
        </Input>
        <Input name="fileName" type="text">
          File Name
        </Input>
        <Input name="date" type="date">
          Date
        </Input>
      </div>
    </form>
  );
}
