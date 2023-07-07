import React, { useState } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import ButtonAddjournal from "./ButtonAddjournal";
import { AiOutlineClose } from "react-icons/ai";
import { BsClock, BsChatText } from "react-icons/bs";
import { BiLoader } from "react-icons/bi";

function JournalNotePreview({ setOpenJournal }) {
  const jNote = useSelector((state) => state.journal.journalBoard);
  console.log(jNote);

  //truncate
  function truncate(str: string) {
    return str.length > 100 ? str.slice(0, 99) + "..." : str;
  }
  //useState for viewing
  const [openView, setOpenView] = useState(false);
  //remembering the id of the note
  const [chosenId, setChosenId] = useState<number | null>(null);

  //find needed object
  function findObj(arr) {
    return arr.find((x) => x.id === chosenId);
  }

  //close all the notes preview
  const [openPreview, setOpenPreview] = useState(true);

  return (
    <div className="text-white  flex flex-col">
      {openPreview && (
        <div className="text-white  z-50 md:mx-auto  flex flex-col px-4 md:w-[70%]">
          <ButtonAddjournal setOpenJournal={setOpenJournal} />
          {jNote.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 flex-wrap mx-auto py-4">
              {jNote.map((n) => (
                <div
                  key={n.id}
                  className="border-white border  flex flex-col self-start px-4 py-4 rounded-lg bg-slate-200/20 shadow-md w-[200px] h-[220px] md:h-[260px] relative cursor-pointer "
                  onClick={(): void => {
                    setChosenId(n.id);
                    setOpenView(!openView);
                    setOpenPreview(false);
                  }}
                >
                  <div className="flex  items-center gap-x-2 ">
                    <BiLoader className="md:text-[25px] text-[22px] bg-slate-800/30 rounded-full px-1 " />
                    <p className="px-3  rounded-xl bg-slate-800/30 md:text-[16px] text-[14px]">
                      {n.emotion}
                    </p>
                  </div>
                  <div className="pt-2 text-wrap md:text-[16px] text-[14px]">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: truncate(n.journalNote),
                      }}
                    />
                  </div>
                  <div className="md:text-sm text-xs absolute bottom-0 pb-4">
                    {n.date}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p>There's nothing so far💔</p>
            </div>
          )}
        </div>
      )}
      {/* view full note */}
      {openView && (
        <div className="px-3  flex flex-col gap-y-5 md:gap-y-6 border w-[90%] md:w-[50%] rounded-lg mx-auto text-black bg-white/90 h-[80vh] shadow-lg shadow-black  font-poppins ">
          <div className=" rounded-full py-2  cursor-pointer ">
            <AiOutlineClose
              onClick={(): void => {
                setOpenView(false);
                setOpenPreview(true);
              }}
            />
          </div>
          {/* date and time */}
          <div className="flex gap-x-2 text-xs md:text-sm items-center text-gray-600">
            <BsClock />
            <p>{findObj(jNote).date}</p> - <p>{findObj(jNote).time}</p>
          </div>
          {/* emotion */}
          <h3 className="pr-3  self-start ">
            Today I feel :{" "}
            <span className="bg-slate-500/20 px-2 rounded-xl">
              {findObj(jNote).emotion}
            </span>
          </h3>
          {/* the main text of the note*/}
          <div className="h-full mb-4 rounded-lg py-4 flex flex-col px-4 gap-y-7 shadow-xs shadow-emerald-950/60 bg-emerald-800/10">
            <p
              dangerouslySetInnerHTML={{ __html: findObj(jNote).journalNote }}
            />
            <div className="flex flex-col gap-y-2">
              <p className="font-semibold text-teal-950">
                3 victories of today:
              </p>

              <p
                dangerouslySetInnerHTML={{ __html: findObj(jNote).victories }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JournalNotePreview;
