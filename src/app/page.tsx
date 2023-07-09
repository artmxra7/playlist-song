"use client";
import { Header, Hero, Player, Sidebar } from "@/components";
import Main from "@/components/main/Main";
import { useState } from "react";
export default function Index() {
  const [view, setView] = useState("home"); // ["search", "library", "playlist", "artist"]
  return (
    <>
      <Header />
      <main className="flex w-full overflow-hidden h-screen bg-black">
        <Sidebar view={view} setView={setView} />
        <Main page={view} />
      </main>
      <Player/>
    </>
  );
}
