import React, { useState } from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import dateFormat, { masks } from "dateformat";
import { useDispatch } from "react-redux";
import { addToJournal } from "../redux/Features/journal-slice";
import JournalNotePreview from "./JournalNotePreview";
import ButtonAddjournal from "./ButtonAddjournal";

interface Emotions {
  id: number;
  emotion: string;
}
const emotionsArr: Emotions[] = [
  { id: 0, emotion: "" },
  { id: 1, emotion: "#anxious" },
  { id: 2, emotion: "#angry" },
  { id: 3, emotion: "#content" },
  { id: 4, emotion: "#happy" },
  { id: 5, emotion: "#lonely" },
  { id: 6, emotion: "#tired" },
  { id: 7, emotion: "#sleepy" },
  { id: 8, emotion: "#melancholic" },
];
function Journal() {
  const [selectedEmotion, setSelectedEmotion] = useState<string>("");
  const [journalNote, setJournalNote] = useState<string>("");
  const [victoriesOfDay, setVictoriesOfDay] = useState<string>("");
  const [openJournal, setOpenJournal] = useState(true);

  const time: string = dateFormat(new Date(), "HH:MM");

  const dispatch = useDispatch();

  return (
    <div className="w-full h-full relative  flex flex-col z-10">
      {openJournal && (
        <div className=" h-full w-full flex flex-col justify-center items-center ">
          <div className=" px-3  flex flex-col gap-y-5 md:gap-y-6 border w-[90%] md:w-[50%] rounded-lg mx-auto text-white bg-slate-300/10 h-[80vh] shadow-lg shadow-black ">
            {/* cancel and save buttons */}
            <div className="w-full flex justify-between py-2">
              <div className=" rounded-full px-2 py-2  cursor-pointer">
                <AiOutlineClose
                  onClick={(): void => {
                    setOpenJournal(false);
                  }}
                />
              </div>
              <h2 className="font-poppins text-[16px] md:text-[18px]">
                Journal
              </h2>
              <div className=" rounded-full px-2 py-2 bg-gray-400/80 text-white cursor-pointer shadow-lg hover:shadow-sm hover:bg-gray-500/80">
                <AiOutlineCheck
                  onClick={(): void => {
                    dispatch(
                      addToJournal({
                        emotion: selectedEmotion,
                        date: dateFormat(new Date(), "dd mmmm yyyy"),
                        time: time,
                        journalNote: journalNote,
                        id: Date.now(),
                        victories: victoriesOfDay,
                      })
                    );
                    //console.log(selectedEmotion, time, journalNote, Date.now());
                    setOpenJournal(false);
                    setSelectedEmotion("");
                  }}
                />
              </div>
            </div>

            {/* the emotion */}
            <div className="flex  bg-white/10 self-start px-2 py-2 rounded-xl text-[14px] md:text-[16px]">
              <h3 className="pr-3 font-poppins">Today I feel</h3>

              <select
                name="emotions"
                value={selectedEmotion}
                className="outline-none bg-transparent flex flex-row cursor-pointer  font-poppins"
                onChange={(e) => {
                  setSelectedEmotion(e.target.value);
                  console.log(selectedEmotion);
                }}
              >
                {emotionsArr.map((emo) => (
                  <option
                    value={emo.emotion}
                    key={emo.id}
                    className="outline-none  bg-slate-500 text-white "
                  >
                    {emo.emotion}
                  </option>
                ))}
              </select>
            </div>

            {/* the main body of journal */}
            <div className="h-full rounded-lg bg-white/80 mb-2 md:mb-4 font-poppins">
              <textarea
                style={{ resize: "none" }}
                className="w-full  h-[60%] outline-none  text-black px-2 py-2  bg-transparent font-poppins  text-[14px]"
                placeholder="Type your feelings"
                onChange={(e) =>
                  setJournalNote(
                    e.target.value.replace(/(\r\n|\r|\n)/g, "<br>")
                  )
                }
              />

              <div className="h-[30%]">
                <p className="text-black px-2">3 victories of today:</p>
                <textarea
                  style={{ resize: "none" }}
                  className="w-full h-full outline-none  text-black  px-2 py-2  bg-transparent text-[14px]"
                  placeholder="tell us about your victories today✨ "
                  onChange={(e) =>
                    setVictoriesOfDay(
                      e.target.value.replace(/(\r\n|\r|\n)/g, "<br>")
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {openJournal === false && (
        <div className="flex flex-col">
          <JournalNotePreview setOpenJournal={setOpenJournal} />
        </div>
      )}
    </div>
  );
}

export default Journal;
