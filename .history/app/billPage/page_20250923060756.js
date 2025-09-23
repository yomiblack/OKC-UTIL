import Link from "next/link";

export default function BillPage() {
  return (
   <div className="flex">
      <div className=" text-center">
        <h2 className="text-2xl font-bold  mb-2 ">No File Selected</h2>
          No Bill Selected
        </h2>
        <p className="text-gray-500 mb-4">
          Select a bill or get started with a new one
        </p>
        <Link href="/bill/billSlug">
          <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white py-2 px-4 rounded hover:from-red-600 hover:to-orange-500">
            Create new bill
          </button>
        </Link>
      </div>
    </div>
  );
}
