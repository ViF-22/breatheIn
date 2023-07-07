"use client";
import Link from "next/link";
import ButtonBack from "./components/ButtonBack";

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col bg-gray-800 items-center font-poppins ">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full fixed top-0 right-0 z-2 object-cover"
        poster="pic-mood-3.png"
      >
        <source src="bg-mood-3.mp4" />
      </video>
      <ButtonBack />
      <div className="z-30 h-full flex relative items-center justify-center">
        <h3 className="text-gray-600  md:text-3xl py-20">404 - not found</h3>
      </div>
    </div>
  );
}
