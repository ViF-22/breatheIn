"use client";
import React from "react";
import { useSelector } from "react-redux"; //for accessing values

function MoodBoard() {
  const mood = useSelector((state) => state.mood.moodBoard);
  console.log(mood);
  return (
    <div className="text-white   rounded-md  w-full">
      {mood.length > 0 ? (
        <div className="flex flex-col  items-center mt-10  w-[50%] bg-slate-600/20 mx-auto py-5 rounded-lg shadow-sm">
          {mood.map((m) => (
            <div
              className=" relative flex flex-col px-5 pb-10 border-l-[1.5px]  border-white  "
              key={m.id}
            >
              <div className="h-2 w-2 bg-white absolute rounded-full -left-[4px]"></div>
              <div className="text-white px-4 py-2 border  border-white rounded-3xl shadow-md ">
                <h1>{m.mood}</h1>
                <h1>{m.date}</h1>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-white font-poppins md:text-xl text-md">
          <p>There's nothing so far 🥺</p>
        </div>
      )}
    </div>
  );
}

export default MoodBoard;
