import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { TaskPage } from "./pages/TaskPage/TaskPage";

export const AppRouter = () => {
  if (window.innerWidth < 770) {
    return (
      <Routes>
        <Route path="/" element={<MainPage />}></Route>

        <Route path="/task/:id" element={<TaskPage />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/task/:id" element={<TaskPage />} />
      </Route>
    </Routes>
  );
};
