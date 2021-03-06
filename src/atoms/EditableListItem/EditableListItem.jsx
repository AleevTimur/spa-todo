import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import s from "./styles.module.scss";

import {
  addMicroListHere,
  deleteMicroTask,
  editMicroTask,
} from "model/store/microTasks/actionCreators";

export const EditableListItem = ({ defaultValue, taskId, pageId }) => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    const value = e.target.value;
    dispatch(editMicroTask({ value, taskId, pageId }));
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
      dispatch(deleteMicroTask(taskId, pageId));
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
EditableListItem.propTypes = {
  defaultValue: PropTypes.string,
  taskId: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
};
