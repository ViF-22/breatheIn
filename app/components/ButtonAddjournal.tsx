import React from "react";
import { CiCirclePlus } from "react-icons/ci";
function ButtonAddjournal({ setOpenJournal }: any) {
  return (
    <div
      className="flex gap-x-2 items-center py-2 border rounded-3xl self-center px-4 my-4 ml-4 cursor-pointer shadow-lg hover:shadow-sm text-white "
      onClick={(): void => setOpenJournal(true)}
    >
      <p className="text-[12px] md:text-[15px]">Add note to journal</p>
      <CiCirclePlus className="text-[18px]" />
    </div>
  );
}

export default ButtonAddjournal;
