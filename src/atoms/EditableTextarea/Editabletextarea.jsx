import React, { useLayoutEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import s from "./styles.module.scss";

import {
  deleteMicroTask,
  editMicroTask,
} from "model/store/microTasks/actionCreators";

export const EditableTextarea = ({ defaultValue, taskId, ...props }) => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    const value = e.target.value;
    dispatch(editMicroTask({ value, taskId }));
  };
  const onDelete = (e) => {
    if (e.keyCode === 8 && e.target.value === "") {
      dispatch(deleteMicroTask(taskId));
    }
  };

  useLayoutEffect(() => {
    textareaRef.current.style.height = 0;
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + 5 + "px";
  });

  const textareaRef = useRef(null);

  return (
    <textarea
      autoFocus
      ref={textareaRef}
      className={s.textarea}
      onChange={onChange}
      defaultValue={defaultValue}
      onKeyDown={onDelete}
      {...props}></textarea>
  );
};
