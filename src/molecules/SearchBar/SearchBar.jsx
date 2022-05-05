import { Button } from "atoms/Button/Button";
import cn from "classnames";
import React, { useEffect, useRef, useState } from "react";

import s from "./styles.module.scss";
const { root, root_active } = s;

export const SearchBar = ({ handleSearchTasks, handleSetModalWidth }) => {
  const searchFieldRef = useRef(null);
  handleSetModalWidth(searchFieldRef.current?.clientWidth);
  const [isActive, setIsActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    handleSearchTasks(searchValue.toLowerCase());
  }, [searchValue]);

  const onChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };
  const onFocus = () => {
    setIsActive(true);
  };
  const onBlur = () => {
    setIsActive(false);
  };

  return (
    <div
      className={cn(root, {
        [root_active]: isActive,
      })}
      ref={searchFieldRef}>
      <input
        value={searchValue}
        onChange={onChange}
        className={s.input}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Button variant="minimal">
        <div className={s.iconWrapper}>
          <svg
            className={s.icon}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </Button>
    </div>
  );
};
