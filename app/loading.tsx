import React from "react";
import ThreeDotsWave from "./ThreeDotsWave";

function Loading() {
  return (
    <div className="w-full h-[100vh] bg-gray-800 text-black text-[120px] flex items-center justify-center">
      <ThreeDotsWave />
    </div>
  );
}

export default Loading;
