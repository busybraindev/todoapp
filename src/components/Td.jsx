import React, { useContext, useRef } from "react";
import todo from "../assets/todo.png";
import { sc } from "./contexts/Index";

import Tm from "./Tm";
const Td = () => {
  const { td, std, dm, tg } = useContext(sc);
  const inputRef = useRef();
  const add = () => {
    const iT = inputRef.current.value.trim();
    console.log(iT);
    if (iT === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: iT,
      isComplete: false,
    };
    std((cu) => [...cu, newTodo]);
    inputRef.current.value = "";
  };
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img src={todo}></img>
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      <div>
        {td.map((dt, i) => {
          return (
            <Tm
              key={i}
              text={dt.text}
              id={dt.id}
              isComplete={dt.isComplete}
              dm={dm}
              tg={tg}
            ></Tm>
          );
        })}
      </div>
    </div>
  );
};

export default Td;
