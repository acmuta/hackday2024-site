"use client";
import Image from "next/image";
import Header from "./components/Header";
import Clock from "./components/Clock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pl-24 pr-24 pt-5">
      <Header />
      {/* Titles */}
      <div className="flex flex-col gap-y-3 mt-20 items-center">
        <h1 className="relative md:top-14 roboto text-4xl">
          HACKUTA X FOUNDERS ARENA
        </h1>
        <h1 className="iceland tracking-widest md:text-[180px] sm:text-[100px] text-[50px]">
          HACKDAY
        </h1>
      </div>
      {/* Dates */}
      <Clock targetDate="2024-03-23T09:00:00" />
      {/* buttons */}
      <div className="relative bottom-10 flex flex-row gap-x-20">
        <button className="iceland flex align-middle text-3xl md:w-48 w-12 py-2 bg-white rounded-lg text-black justify-center border-solid border-2">
          APPLY
        </button>
        <button className="iceland flex align-middle text-3xl md:w-48 w-12 py-2 bg-white bg-opacity-15 rounded-lg text-white justify-center border-solid border-2">
          Learn More
        </button>
      </div>
    </main>
  );
}
