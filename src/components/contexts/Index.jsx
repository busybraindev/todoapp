import React, { createContext, useEffect, useRef, useState } from "react";
export const sc = createContext(null);
const Index = ({ children }) => {
  const [td, std] = useState(
    localStorage.getItem("td") ? JSON.parse(localStorage.getItem("td")) : [],
  );
  useEffect(() => {
    localStorage.setItem("td", JSON.stringify(td));
    console.log(td);
  }, [td]);

  const dm = (id) => {
    std((cu) => {
      return cu.filter((todo) => todo.id !== id);
    });
  };
  const tg = (id) => {
    std((cu) => {
      return cu.map((tm) => {
        if (tm.id === id) {
          return { ...tm, isComplete: !tm.isComplete };
        }
        return tm;
      });
    });
  };
  return <sc.Provider value={{ td, std, dm, tg }}>{children}</sc.Provider>;
};

export default Index;
