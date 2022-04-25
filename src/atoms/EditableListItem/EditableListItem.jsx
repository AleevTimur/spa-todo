import {
  addMicroListHere,
  deleteMicroTask,
  editMicroTask,
  addMicroList,
} from "model/store/microTasks/actionCreators";
import React from "react";
import { useDispatch } from "react-redux";
import s from "./styles.module.scss";

export const EditableListItem = ({ defaultValue, taskId, pageId }) => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    const value = e.target.value;
    dispatch(editMicroTask({ value, taskId }));
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(
        addMicroListHere({
          pageId: pageId,
          value: "",
          previousTaskId: taskId,
        })
      );
    } else if (e.keyCode === 8 && e.target.value === "") {
      dispatch(deleteMicroTask(taskId));
    }
  };

  return (
    <li className={s.root}>
      <input
        autoFocus
        type="text"
        defaultValue={defaultValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </li>
  );
};
