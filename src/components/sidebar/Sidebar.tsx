"use client";
import React, { FC } from "react";
import { BuildingLibraryIcon, HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface Props {
  view: string;
  setView: (p: string) => void;
}
const Sidebar: FC<Props> = ({ view, setView }) => {
  return (
    <div className="w-64 text-neutral-400 grow-0 shrink-0 h-screen overflow-y-scroll border-r border-neutral-900 p-5 text-sm hidden md:inline-flex scrollbar-hide">
      <div className="space-y-4">
        <div>
          <Image
            alt="Spotify Logo"
            src="https://rb.gy/y9mwtb"
            width="150"
            height="65"
            draggable={false}
          />
        </div>
        <button
          onClick={() => setView("home")}
          className={`flex items-center space-x-2 hover:text-white ${
            view == "home" ? "text-white" : null
          }`}
        >
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button
          onClick={() => setView("search")}
          className={`flex items-center space-x-2 hover:text-white ${
            view == "search" ? "text-white" : null
          }`}
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button
          onClick={() => setView("library")}
          className={`flex items-center space-x-2 hover:text-white ${
            view == "library" ? "text-white" : null
          }`}
        >
          <BuildingLibraryIcon className="h-5 w-5" />
          <p>Library</p>
        </button>
        <button className=" flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <hr className="border-neutral-900" />
        <button className=" flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className=" flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
