import Link from "next/link";
import Input from "@/app/component/input";
import SubmitButton from "../component/submitButton";

export default function NewBillComponent() {
  return (
    <div className="w-[35rem]">
      <menu className="flex gap-4 justify-end items-center my-4">
        <Link href="/bill">
          <button className="text-orange-700 hover:text-orange-800 hover:shadow-sm">
            Cancel
          </button>
        </Link>
        <Link href="/bill">
        <SubmitButton route="" type="submit" label="Save"/>
        </Link>
      </menu>
      <div className="flex flex-col gap-4 ">
        <label>File No.</label>
        <Input name='fileNumber' type='text'></Input>
        <label>File Name</label>
        <Input name='fileName' type='text'></Input>
      </div>
    </div>
  );
}
