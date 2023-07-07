"use client";
import React, { useEffect } from "react";
import MoodBoard from "../components/MoodBoard";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux"; //for accessing values
import { BiArrowBack } from "react-icons/bi";
import ButtonBack from "../components/ButtonBack";

function page() {
  const router = useRouter();
  useEffect(() => {
    const data = window.localStorage.getItem("ENTERING_NAME");
    console.log(data);
    if (data === null || data.length < 1) router.push("/");
  }, []);
  return (
    <div className="w-full min-h-full flex flex-col bg-gray-800 ">
      <video
        autoPlay
        loop
        muted
        className="w-full min-h-full fixed top-0 left-0 z-2 object-cover object-left"
        poster="pic-mood-4.png"
      >
        <source src="bg-mood-4.mp4" />
      </video>
      <ButtonBack />
      <div className="pt-12 h-full z-20">
        <MoodBoard />
      </div>
    </div>
  );
}

export default page;
