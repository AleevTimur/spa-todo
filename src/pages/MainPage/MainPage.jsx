import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import s from "./styles.module.scss";

import { TasksList } from "organisms/TasksList/TasksList";
import { SearchBar } from "molecules/SearchBar/SearchBar";
import { SearchList } from "organisms/TasksList/SearchList";

export const MainPage = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchTasks = (value) => {
    if (value) {
      setIsSearchActive(true);
    } else {
      setIsSearchActive(false);
    }
    setSearchValue(value);
  };

  if (window.innerWidth < 770) {
    return (
      <div className={s.wrapper}>
        <section className={s.sidebar}>
          <SearchBar handleToggleSearchList={handleSearchTasks} />
          {isSearchActive ? (
            <SearchList searchValue={searchValue} />
          ) : (
            <TasksList />
          )}
        </section>
      </div>
    );
  }
  return (
    <div className={s.wrapper}>
      <section className={s.sidebar}>
        <SearchBar handleSearchTasks={handleSearchTasks} />
        {isSearchActive ? (
          <SearchList searchValue={searchValue} />
        ) : (
          <TasksList />
        )}
      </section>
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  );
};
