import React from "react";
import { useRouter } from "next/navigation";
import { BsPencilSquare, BsHearts, BsHeartPulseFill } from "react-icons/bs";

function JournalAndMoodboard() {
  const router = useRouter();

  return (
    <div className="flex flex-row  gap-x-5 sm:gap-x-0 sm:flex-col   rounded-3xl px-3 py-4  sm:gap-y-5 justify-center shadow-sm z-50 absolute bottom-0 sm:left-0 sm:bottom-[50%] sm:translate-y-[50%] left-[50%] translate-x-[-50%] sm:translate-x-0 bg-slate-100/10">
      <div
        className="flex flex-col items-center gap-y-2"
        onClick={() => router.push("/journal")}
      >
        <div className="p-3 sm:p-5 justify-center border rounded-full cursor-pointer flex flex-col items-center shadow-md hover:shadow-sm  hover:bg-slate-900/20 hover:border-slate-400">
          <BsPencilSquare className=" text-[12px] sm:text-[20px] text-white" />
        </div>
        <p className="text-xs">Journal</p>
      </div>

      <div
        className="flex flex-col items-center gap-y-2"
        onClick={() => router.push("/moodboard")}
      >
        <div className="p-3 sm:p-5 border rounded-full cursor-pointer flex flex-col items-center justify-center shadow-md hover:shadow-sm hover:bg-slate-900/20 hover:border-slate-400">
          <BsHeartPulseFill className=" text-[12px] sm:text-[20px] text-white" />
        </div>
        <p className="text-xs">Mood Board</p>
      </div>
    </div>
  );
}

export default JournalAndMoodboard;
