import React from "react";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

function ButtonBack() {
  const router = useRouter();
  return (
    <div
      className="z-20 flex gap-x-2 items-center py-2 border rounded-3xl self-start px-4 my-4 ml-4 cursor-pointer shadow-lg hover:shadow-sm text-white "
      onClick={(): void => router.push("/")}
    >
      <BiArrowBack className="text-[14px]" />{" "}
      <p className="text-[12px]">Return to the main</p>
    </div>
  );
}

export default ButtonBack;
