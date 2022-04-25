import {
  deleteMicroTask,
  editMicroTask,
} from "model/store/microTasks/actionCreators";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import s from "./styles.module.scss";

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

  const textareaRef = useRef(null);
  useLayoutEffect(() => {
    textareaRef.current.style.height = 0;
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + 5 + "px";
  });

  return (
    <textarea
      autoFocus
      ref={textareaRef}
      className={s.textarea}
      onChange={onChange}
      defaultValue={defaultValue}
      onKeyDown={onDelete}
      {...props}
    ></textarea>
  );
};
