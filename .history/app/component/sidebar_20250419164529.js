import Link from "next/link";
import getFileData from "./action/getFileData";

export default async function SideBar({ currentPage }) {
  const files = await getFileData(null, "files");

  const activeClass =
    "bg-gradient-to-r from-red-500 to-orange-400 text-transparent bg-clip-text hover:from-red-600 hover:to-orange-500 hover:shadow-sm disabled:opacity-50 whitespace-wrap ";

  const inactiveClass =
    "hover:text-orange-300 hover:shadow-sm hover:transition-all duration-200";

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
    <aside className="hidden md:fixed left-0 md:block border-r-2 dark:border-slate-800 border-slate-100 text-sm min-h-dvh p-4 max-w-sm ">
      <h2 className="mb-6 font-bold uppercase tetxt-sm md:text-xl text-orange-500">
        {content}
      </h2>

      {/* Search input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder={`Search ${content}...`}
          className="bg-transparent w-full p-3 border outline-none focus:outline-none focus:ring-1 focus:ring-orange-200 border-orange-100 rounded-md  dark:text-stone-50 text-stone-700 focus:shadow-lg shadow-sm"
        />
      </div>

      <Link href="/file/courtForm">
        {
          // pathname !== "/bill/billSlug" && pathname !== "/file/fileSlug" &&
          <button>{`+ Add ${content}`}</button>
        }
      </Link>

      {/* Filtered file list */}
      <ul className="flex flex-col mt-8 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200">
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
