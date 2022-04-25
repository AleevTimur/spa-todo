import React from "react";
import { Reorder } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import s from "./styles.module.scss";

export const Task = ({
  taskData,
  handleDeleteTask,
  handleChangeComplete,
  titleOffset,
}) => {
  const { id, title } = taskData;
  const onDeleteTask = () => {
    handleDeleteTask(id);
  };
  const onDoneTask = () => {
    handleChangeComplete(id);
  };
  const onDragEnd = (e) => {
    if (titleOffset < e.y + 100) {
      handleChangeComplete(id);
    }
  };
  return (
    <>
      <Reorder.Item
        key={id}
        value={taskData}
        className={s.listItem}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onDragEnd={onDragEnd}>
        <label className={s.label}>
          <input type="checkbox" className={s.defaultCheckbox} />
          <div className={s.checkbox} onClick={onDoneTask}></div>
        </label>
        <Link to={`/task/${id}`} className={s.title}>
          {title}
        </Link>
        <div className={s.buttonsGroup}>
          <button className={s.button} onClick={onDeleteTask}>
            <div className={s.iconWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={s.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </button>
        </div>
      </Reorder.Item>
    </>
  );
};

Task.propTypes = {
  taskData: PropTypes.object.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  handleDoneTask: PropTypes.func.isRequired,
};
