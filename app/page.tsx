"use client";
import { useState, useEffect } from "react";
import dateFormat, { masks } from "dateformat";
import { AiOutlineDown } from "react-icons/ai";
import JournalAndMoodboard from "./components/JournalAndMoodboard";
import Mood from "./components/Mood";
import { url } from "inspector";

import { useWindowSize } from "@uidotdev/usehooks";

function Browser({ size }) {
  return (
    <div
      data-testid="browser"
      className="browser"
      style={{ width: size.width, height: size.height }}
    />
  );
}

export default function Home() {
  const size = useWindowSize();
  //name
  const [name, setName] = useState<string | null>(null);
  const [finishedName, setFinishedName] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setFinishedName(name);
    }
  };

  //close the input on submit
  const [enteringInput, setEnteringInput] = useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem("ENTERING_NAME");
    if (data !== null) setFinishedName(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ENTERING_NAME", JSON.stringify(finishedName));
  }, [finishedName]);

  //time
  const curTime = dateFormat(new Date(), "HH : MM");
  const [time, setTime] = useState(curTime);

  const checkTimePeriod = () => {
    if (new Date().getHours() < 5) {
      return "Good night,";
    } else if (new Date().getHours() < 12) {
      return "Good morning,";
    } else if (new Date().getHours() <= 17) {
      return "Good evening,";
    } else if (new Date().getHours() >= 18) {
      return "Good afternoon,";
    }
  };

  useEffect(() => {
    setInterval(() => setTime(dateFormat(new Date(), "HH : MM")), 1000);
  }, []);

  //mood board
  const [openMood, setOpenMood] = useState(false);

  //offer to journal
  const [offerToJournal, setOfferToJournal] = useState(false);
  return (
    <div
      className="text-white w-full flex  flex-col items-center  justify-center  relative   z-0 overflow-hidden max-h-[100vh]
    "
      style={{ height: size.height }}
    >
      {/* name - starting page*/}
      {finishedName === "" && (
        <div
          className="w-full object-cover relative h-full "
          // style={{ height: size.height }}
        >
          <video
            autoPlay
            muted
            loop
            playsinline
            className="w-full min-h-full absolute top-0 right-0  object-cover "
            poster="pic-bg-3.png"
          >
            <source src="bg-3.mp4" />
          </video>
          <form
            onSubmit={(): void => setEnteringInput(!enteringInput)}
            className="flex items-center justify-center h-full w-full z-20"
          >
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              className="md:w-[430px] w-[220px] text-[20px] md:text-[46px] border-b-[3px] border-white outline-none bg-transparent text-xl text-center text-white placeholder-white py-1 z-20"
              onChange={(e) => {
                e.preventDefault();
                setName(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          </form>
        </div>
      )}
      {/* main block after name input */}

      {finishedName && (
        <div className="w-full text-white font-poppins h-full  relative flex flex-col items-center justify-center overflow-hidden bg-black">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full absolute top-0 right-0 z-2 object-cover"
            poster="pic-bg-2.png"
          >
            <source src="bg-2.mp4" />
          </video>

          <div>
            <JournalAndMoodboard />
          </div>
          <div className="w-full  text-center flex flex-col items-center justify-center relative z-20 ">
            {/* time */}
            <div className="text-white flex justify-center w-full ">
              <h2 className="md:text-[160px] text-[100px] leading-[80px] md:leading-[140px]">
                {time}
              </h2>
            </div>
            {/* name */}
            <div className="text-center w-full flex flex-col gap-y-1">
              <h3 className="md:text-[45px] text-[30px] text-white">
                {checkTimePeriod()} {finishedName}
              </h3>
              {/* choose button */}
              <h3 className="flex justify-center text-[16px] md:text-[20px]">
                How are you feeling today?{" "}
                <h3
                  className="flex items-center gap-x-2 pl-1 cursor-pointer"
                  onClick={(): void => {
                    setOpenMood(!openMood);
                    setOfferToJournal(false);
                  }}
                >
                  Choose
                  <span>
                    <AiOutlineDown />
                  </span>
                </h3>{" "}
              </h3>
            </div>
            {/* choose mood block */}

            {openMood && (
              <div className="absolute md:-bottom-24 max-[767px]:-bottom-[100px] max-[400px]:-bottom-[130px]">
                <Mood
                  setOpenMood={setOpenMood}
                  setOfferToJournal={setOfferToJournal}
                />
              </div>
            )}

            {offerToJournal && (
              <div className="absolute -bottom-10 text-[16px] md:text-[20px]">
                Thank you! Do you want to journal this day?✨
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
