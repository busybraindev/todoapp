import React from "react";
import tick from "../assets/tick.png";
import cn from "../assets/cancel.png";
import bn from "../assets/bin.png";

const Tm = ({ text, id, isComplete, dm, tg }) => {
  return (
    <div className=" flex items-center my-3 gap-2 w-80">
      <div
        onClick={() => {
          tg(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img
          src={isComplete ? tick : cn}
          alt=""
          className={isComplete ? "w-8 h-8" : "w-10"}
        />

        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          dm(id);
        }}
        className="w-3.5 cursor-pointer"
        src={bn}
        alt=""
      />
    </div>
  );
};

export default Tm;
