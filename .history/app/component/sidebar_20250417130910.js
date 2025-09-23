import Link from "next/link";
import getFileData from "./action/getFileData";

export default async function SideBar({ currentPage }) {
  const files = await getFileData(null, "files");

  const activeClass =
    "bg-gradient-to-r from-red-500 to-orange-400 text-transparent bg-clip-text hover:from-red-600 hover:to-orange-500 hover:shadow-sm disabled:opacity-50";

  const inactiveClass = "text-stone-300 hover:text-orange-300 hover:shadow-sm";

  const content = "Files";

  function titleCase(str) {
    const exclusions = [
      "and",
      "or",
      "for",
      "the",
      "a",
      "an",
      "to",
      "in",
      "on",
      "at",
      "of",
    ];
    return str
      .split(" ")
      .map((word, index) => {
        if (index === 0 || !exclusions.includes(word.toLowerCase())) {
          // Capitalize the first letter of words not in exclusions or the first word
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word.toLowerCase();
      })
      .join(" ");
  }

  // if (!isFilePage) content = "Files";

  // if (!renderSidebar) return null;

  return (
    <aside className="hidden md:block px-8 py-6 border-r-2 text-sm min-h-dvh">
      <h2 className="mb-6 font-bold uppercase md:text-xl text-orange-500 shadow-sm ">
        {content}
      </h2>

      {/* Search input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder={`Search ${content}...`}
          className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-orange-400 border-orange-500 rounded bg-stone-800 text-stone-50"
        />
      </div>

      <Link href="/file/courtForm">
        {
          // pathname !== "/bill/billSlug" && pathname !== "/file/fileSlug" &&
          <button>{`+ Add ${content}`}</button>
        }
      </Link>

      {/* Filtered file list */}
      <ul className="flex flex-col mt-8 space-y-4 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200">
        {files.map((file) => (
          <li key={file._id}>
            <Link
              className={
                currentPage === `${file._id}` ? activeClass : inactiveClass
              }
              href={`/file/${file._id}`}
            >
              {titleCase(file.name)}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
