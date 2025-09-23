"use client";
import Link from "next/link";
import useDataStore from "../store/dataStore/store";
import { useDataAction } from "../store/dataStore/store";
import useUiStore from "../store/uiStore/store";
import { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function SideBar({ currentPage }) {
  console.log(useDataAction);
  const { searchFiles, getFileData } = useDataAction();
  const { filteredFiles, files, loading, error } = useDataStore();

  const { toggleSidebar } = useUiStore();

  const debouncedSearch = useDebouncedCallback((value) => {
    searchFiles(value);
  }, 300);

  useEffect(() => {
    if (!loading && (!files || files.length === 0)) {
      getFileData("files");
    }
  }, [getFileData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
    <aside>
      <h2 className="mb-6 font-bold uppercase tetxt-sm md:text-xl text-orange-500">
        {`${filteredFiles.length} ${content} `}
      </h2>

      {/* Search input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder={`Search ${content}...`}
          className="bg-transparent placeholder:font-thin w-full p-3 outline-none focus:outline-none focus:shadow-inner hover:shadow-md hover:shadow-orange-300 transition-all duration-200 focus:shadow-orange-300 rounded-md dark:text-stone-50 text-stone-700 shadow-sm shadow-orange-200"
          onChange={(e) => debouncedSearch(e.target.value)}
        />
      </div>

      <Link href="/file/courtForm">
        {
          // pathname !== "/bill/billSlug" && pathname !== "/file/fileSlug" &&
          <button
            onClick={() => window.innerWidth < 768 && toggleSidebar()}
          >{`+ Add ${content}`}</button>
        }
      </Link>

      {/* Filtered file list */}
      <ul className="flex flex-col mt-8 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200">
        {filteredFiles.map((file) => (
          <li
            key={file._id}
            onClick={() => window.innerWidth < 768 && toggleSidebar()}
          >
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
