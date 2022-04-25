import React, { useRef } from "react";
import { Reorder } from "framer-motion";
import { useDispatch } from "react-redux";

import s from "./styles.module.scss";

import { Task } from "molecules/Task/Task";
import { CompletedTask } from "molecules/Task/CompletedTask";
import { AddTaskButton } from "molecules/AddTaskButton/AddTaskButton";
import {
  changeTaskCopmlete,
  deleteTask,
} from "model/store/mainTasks/actionCreators";
import { useGetTasks } from "model/hooks/useGetTasks";

export const TasksList = () => {
  const doneTitleRef = useRef(null);
  const dispatch = useDispatch();
  const {
    currentTasksList,
    setCurrentTasksList,
    completedTasksList,
    setCompletedTasksList,
  } = useGetTasks();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };
  const handleChangeComplete = (id) => {
    dispatch(changeTaskCopmlete(id));
  };

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
            handleDeleteTask={handleDeleteTask}
            handleChangeComplete={handleChangeComplete}
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
          <CompletedTask
            taskData={taskData}
            key={taskData.id}
            handleChangeComplete={handleChangeComplete}
            titleOffset={titleOffset}
          />
        ))}
      </Reorder.Group>
    </div>
  );
};
