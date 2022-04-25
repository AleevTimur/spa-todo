import React, { useLayoutEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import s from "./styles.module.scss";

import {
  deleteMicroTask,
  editMicroTask,
} from "model/store/microTasks/actionCreators";

export const EditableTextarea = ({ defaultValue, taskId }) => {
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
    />
  );
};

EditableTextarea.propTypes = {
  defaultValue: PropTypes.string,
  taskId: PropTypes.string.isRequired,
};
