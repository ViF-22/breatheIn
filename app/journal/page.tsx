"use client";
import React from "react";
import Journal from "../components/Journal";
import ButtonBack from "../components/ButtonBack";

function page() {
  return (
    <div className="w-full h-full flex flex-col bg-black ">
      <video
        autoPlay
        loop
        muted
        className="w-full min-h-full fixed top-0 right-0 z-2 object-cover"
        poster="pic-journal-1.png"
      >
        <source src="bg-journal-1.mp4" />
      </video>
      <ButtonBack />

      <Journal />
    </div>
  );
}

export default page;
