import React, { useRef } from "react";
import { Reorder } from "framer-motion";
import { Task } from "molecules/Task/Task";
import s from "./styles.module.scss";
import { CompletedTask } from "molecules/Task/CompletedTask";
import { useDispatch } from "react-redux";
import {
  changeTaskCopmlete,
  deleteTask,
} from "model/store/mainTasks/actionCreators";
import { useGetTasks } from "model/hooks/useGetTasks";
import { AddTaskButton } from "molecules/AddTaskButton/AddTaskButton";

export const TasksList = ({ tasksData }) => {
  const doneTitleRef = useRef(null);
  const titleOffset = doneTitleRef.current?.offsetTop;
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
        className={s.list}
      >
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
        className={s.list}
      >
        {completedTasksList.map((taskData) => (
          <CompletedTask
            taskData={taskData}
            key={taskData.id}
            handleChangeComplete={handleChangeComplete}
          />
        ))}
      </Reorder.Group>
    </div>
  );
};
