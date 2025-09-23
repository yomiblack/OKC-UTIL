import Link from "next/link";
import Input from "@/app/component/input";

export default function NewBillComponent() {
  return (
    <div className="w-[35rem]">
      <menu className="flex gap-4 justify-end items-center my-4">
        <Link href="/bill">
          <button className="text-stone-800 dark:text-gray-50 hover:text-stone-950">
            Cancel
          </button>
        </Link>
        <Link href="/bill">
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </Link>
      </menu>
      <div className="flex flex-col gap-4 ">
        <label>File Number</label>
        <Input type='text'></Input>
        <label>File Name</label>
        <Input type='text'></Input>
      </div>
    </div>
  );
}
