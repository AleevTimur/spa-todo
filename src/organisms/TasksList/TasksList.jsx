import React, { useRef } from "react";
import { Reorder } from "framer-motion";

import s from "./styles.module.scss";

import { Task } from "molecules/Task/Task";
import { AddTaskButton } from "molecules/AddTaskButton/AddTaskButton";
import { useGetTasks } from "model/hooks/useGetTasks";

export const TasksList = () => {
  const doneTitleRef = useRef(null);
  const {
    currentTasksList,
    setCurrentTasksList,
    completedTasksList,
    setCompletedTasksList,
  } = useGetTasks();

  const titleOffset = doneTitleRef.current?.offsetTop;
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
            titleOffset={titleOffset}
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
            titleOffset={titleOffset}
          />
        ))}
      </Reorder.Group>
    </div>
  );
};
