import Link from "next/link";
import Input from "@/app/component/input";
import { handleFormSubmit } from "@/app/component/action/formSubmit";
import SubmitButton from "@/app/component/submitButton";
import theme from "@/app/utils/theme";

export default function NewFile() {

  function formSubmit () {
      console.log('form Submit!');
  }
  return (
    <form
      action={handleFormSubmit}
      className={`${theme()} w-full m-3 md:m-0 h-fit md:max-w-md p-6 rounded-lg shadow-2xl`}
    >
      <menu className="flex gap-4 justify-end items-center mb-6">
        <Link
          href="/file"
          className="text-orange-700 hover:text-orange-800 hover:shadow-sm"
        >
          Cancel
        </Link>
        <SubmitButton route="" type="submit" label="Save" onClick={()} />
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
