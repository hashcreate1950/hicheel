"use client";

import { useTheme } from "../Providers/themeContext";

export default function () {
  const { theme, setTheme, isEnglish, setIsEnglish } = useTheme();

  return (
    <div
      className={`w-full h-[50px]  flex justify-between px-[100px] ${
        theme ? "bg-blue-500" : "bg-yellow-500"
      } `}
    >
      <p>header</p>
      <div className="flex gap-[20px] items-center justify-center">
        <p> {isEnglish ? "About" : "Бидний тухай"}</p>
        <p> {isEnglish ? "Contact" : "Холбоо барих"}</p>
        <button
          className="border-2 px-2 py-[3px] rounded-md"
          onClick={() => {
            setTheme(!theme);
          }}
        >
          switch
        </button>
        <button
          className="border-2 px-2 py-[3px] rounded-md"
          onClick={() => {
            setIsEnglish(!isEnglish);
          }}
        >
          {isEnglish ? "En" : "Mn"}
        </button>
      </div>
    </div>
  );
}
