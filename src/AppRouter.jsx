import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { TaskPage } from "./pages/TaskPage/TaskPage";

import { useWindowWidth } from "model/hooks/useWindowWidth";

export const AppRouter = () => {
  const windowWidth = useWindowWidth();
  if (windowWidth < 770) {
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
