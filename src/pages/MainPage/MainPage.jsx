import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import s from "./styles.module.scss";

import { TasksList } from "organisms/TasksList/TasksList";
import { SearchBar } from "molecules/SearchBar/SearchBar";
import { SearchList } from "organisms/TasksList/SearchList";
import { SortButton } from "molecules/SortButton/SortButton";

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
          <header className={s.header}>
            <SearchBar handleToggleSearchList={handleSearchTasks} />
          </header>
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
        <header className={s.header}>
          <SearchBar handleSearchTasks={handleSearchTasks} />
          <SortButton />
        </header>
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
