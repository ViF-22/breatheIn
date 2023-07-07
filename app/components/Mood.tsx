import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"; //for accessing values
import { useDispatch } from "react-redux"; //for modifying values
import dateFormat, { masks } from "dateformat";

import mood, { add } from "../redux/Features/mood-slice";
interface Emotions {
  id: number;
  emotion: string;
}

const emotionsArr: Emotions[] = [
  { id: 1, emotion: "#anxious" },
  { id: 2, emotion: "#angry" },
  { id: 3, emotion: "#content" },
  { id: 4, emotion: "#happy" },
  { id: 5, emotion: "#lonely" },
  { id: 6, emotion: "#tired" },
  { id: 7, emotion: "#sleepy" },
  { id: 8, emotion: "#melancholic" },
];
function Mood({ setOpenMood, setOfferToJournal }) {
  const dispatch = useDispatch();
  const today: string = dateFormat(new Date(), "dd mmmm yyyy");

  return (
    <div className="w-full text-white ">
      <div className="max-w-[400px] sm:max-w-[600px] flex flex-wrap gap-x-2 gap-y-2 mx-auto px-3 justify-center ">
        {emotionsArr.map((mood) => (
          <div
            className="px-4 py-2 rounded-lg border border-white text-sm bg-slate-400/20 hover:bg-slate-500/10 hover:border-slate-400 cursor-pointer "
            key={mood.id}
            onClick={(): void => {
              dispatch(add({ mood: mood.emotion, date: today, id: mood.id }));
              //console.log(mood.emotion);

              setOpenMood(false);
              setOfferToJournal(true);
            }}
          >
            <p className="text-[12px] md:text-[16px]">{mood.emotion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mood;
