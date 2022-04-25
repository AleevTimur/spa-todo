import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import s from "./styles.module.scss";

import { changeTitle } from "model/store/mainTasks/actionCreators";

export const EditableTitle = ({ pageId, value }) => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    const value = e.target.value;
    dispatch(changeTitle(pageId, value));
  };

  return (
    <input
      autoFocus
      type="text"
      value={value}
      placeholder={!value ? "New task" : ""}
      className={s.input}
      onChange={onChange}
    />
  );
};
EditableTitle.propTypes = {
  defaultValue: PropTypes.string,
  taskId: PropTypes.string.isRequired,
};
