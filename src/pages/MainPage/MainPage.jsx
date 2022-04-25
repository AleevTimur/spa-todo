import React from "react";
import { Outlet } from "react-router-dom";

import s from "./styles.module.scss";

import { TasksList } from "organisms/TasksList/TasksList";
import { SearchBar } from "molecules/SearchBar/SearchBar";

export const MainPage = () => {
  if (window.innerWidth < 770) {
    return (
      <div className={s.wrapper}>
        <section className={s.sidebar}>
          <SearchBar />
          <TasksList />
        </section>
      </div>
    );
  }
  return (
    <div className={s.wrapper}>
      <section className={s.sidebar}>
        <SearchBar />
        <TasksList />
      </section>
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  );
};
