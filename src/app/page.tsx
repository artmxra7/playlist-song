"use client";
import { Header, Hero, Sidebar } from "@/components";
import Main from "@/components/main/Main";
import { useState } from "react";
export default function Index() {
  const [view, setView] = useState("search"); // ["search", "library", "playlist", "artist"]
  return (
    <>
      <Header />
      <main className="flex w-full overflow-hidden h-screen bg-black">
        <Sidebar view={view} setView={setView} />
        <Main page={view} />
      </main>
      <div className="sticky bottom-0 bg-red-100 h-24 w-full">Player</div>
    </>
  );
}
