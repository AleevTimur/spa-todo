import { addTask } from "model/store/mainTasks/actionCreators";
import { addMicroText } from "model/store/microTasks/actionCreators";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";
import s from "./styles.module.scss";

export const AddTaskButton = () => {
  const dispatch = useDispatch();
  const newPageId = uid(4);
  const navigate = useNavigate();
  const onClick = () => {
    dispatch(
      addTask({
        title: "",
        newPageId,
      })
    );
    dispatch(
      addMicroText({
        pageId: newPageId,
        value: "",
      })
    );
    navigate(`/task/${newPageId}`);
  };
  return (
    <button to="/new-task" className={s.root} onClick={onClick}>
      Add new task
    </button>
  );
};
