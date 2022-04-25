import React, { useEffect, useRef, useState } from "react";
import s from "./styles.module.scss";

export const SearchBar = () => {
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  // useEffect(() => {
  //   const slashListener = (e) => {
  //     e.preventDefault();
  //     if (e.key === "/" || e.key === "Enter") {
  //       inputRef.current.focus();
  //     } else if (e.key === "Escape") {
  //       inputRef.current.blur();
  //     }
  //   };
  //   window.addEventListener("keyup", slashListener);
  //   return () => window.removeEventListener("keypress", slashListener);
  // }, []);
  const onFocus = () => setIsActive(true);
  const onBlur = () => setIsActive(false);
  return (
    <div className={isActive ? `${s.root} ${s.root_active}` : s.root}>
      <input
        ref={inputRef}
        className={s.input}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <button className={s.button}>
        <div className={s.iconWrapper}>
          <svg
            className={s.icon}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};
