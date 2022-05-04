import React, { useEffect, useRef, useState } from "react";
import { Reorder } from "framer-motion";

import s from "./styles.module.scss";

import { Task } from "molecules/Task/Task";
import { AddTaskButton } from "molecules/AddTaskButton/AddTaskButton";
import { useGetTasks } from "model/hooks/useGetTasks";
import { useDispatch } from "react-redux";
import { changeOrder } from "model/store/mainTasks/actionCreators";

export const TasksList = () => {
  const dispatch = useDispatch();
  const doneTitleRef = useRef(null);
  const {
    currentTasksList,
    setCurrentTasksList,
    completedTasksList,
    setCompletedTasksList,
  } = useGetTasks();

  const handleChangeOrder = () => {
    dispatch(changeOrder([...currentTasksList, ...completedTasksList]));
  };

  const titleHeightPosition = doneTitleRef.current?.getBoundingClientRect().y;
  return (
    <div className={s.root}>
      <header className={s.header}>
        <h3 className={s.title}>Активные задачи</h3>
        <AddTaskButton />
      </header>
      <Reorder.Group
        axis="y"
        values={currentTasksList}
        onReorder={setCurrentTasksList}
        layoutScroll
        className={s.list}>
        {currentTasksList.map((taskData) => (
          <Task
            taskData={taskData}
            key={taskData.id}
            titleHeightPosition={titleHeightPosition}
            handleChangeOrder={handleChangeOrder}
          />
        ))}
      </Reorder.Group>
      <h3 className={s.title} ref={doneTitleRef}>
        Завершенные задачи
      </h3>
      <Reorder.Group
        axis="y"
        values={completedTasksList}
        onReorder={setCompletedTasksList}
        className={s.list}>
        {completedTasksList.map((taskData) => (
          <Task
            taskData={taskData}
            key={taskData.id}
            titleHeightPosition={titleHeightPosition}
            handleChangeOrder={handleChangeOrder}
          />
        ))}
      </Reorder.Group>
    </div>
  );
};
