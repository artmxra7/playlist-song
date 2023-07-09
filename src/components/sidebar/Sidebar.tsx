"use client";
import {
  BuildingLibraryIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React, { FC } from "react";
interface Props {
  view: string;
  setView: (p: string) => void;
}
const Sidebar: FC<Props> = ({ view, setView }) => {
  return (
    <div className="pb-10 px-8 w-64 text-neutral-400 grow-0 shrink-0 h-screen overflow-y-scroll border-r border-neutral-900 p-5 text-sm hidden md:inline-flex scrollbar-hide">
      <div className="space-y-4 w-full">
        <div>
          <h1 className="text-2xl italic font-semibold">Logo</h1>
        </div>
        <button
          onClick={() => setView("home")}
          className={`flex w-full h-10 gap-x-4 items-center rounded-md hover:text-white px-4 ${
            view == "home" ? "text-white bg-active" : null
          }`}
        >
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button
          onClick={() => setView("search")}
          className={`flex w-full h-10 gap-x-4 items-center rounded-md hover:text-white px-4 ${
            view == "search" ? "text-white bg-active" : null
          }`}
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button
          onClick={() => setView("library")}
          className={`flex w-full h-10 gap-x-4 items-center rounded-md hover:text-white px-4 ${
            view == "library" ? "text-white bg-active" : null
          }`}
        >
          <BuildingLibraryIcon className="h-5 w-5" />
          <p>Library</p>
        </button>

        <hr className="border-neutral-900" />
      </div>
    </div>
  );
};
export default Sidebar;
