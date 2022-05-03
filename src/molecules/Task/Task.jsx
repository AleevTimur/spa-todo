import React from "react";
import { Reorder, useDragControls } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import s from "./styles.module.scss";
import {
  changeTaskCopmlete,
  deleteTask,
} from "model/store/mainTasks/actionCreators";
import { useDispatch } from "react-redux";

const { checkbox, checkboxDone } = s;

export const Task = ({ taskData, titleOffset, handleChangeOrder }) => {
  const dispatch = useDispatch();
  const controls = useDragControls();

  const { id, title, isCompleted } = taskData;

  const onDeleteTask = () => {
    dispatch(deleteTask(id));
  };
  const onDoneTask = () => {
    dispatch(changeTaskCopmlete(id));
  };

  const onDragEnd = (e) => {
    const isToggleCompleted = !isCompleted && titleOffset < e.y - 215;
    const isUndoCompleted = isCompleted && titleOffset > e.y + 215;
    if (isToggleCompleted || isUndoCompleted) {
      dispatch(changeTaskCopmlete(id));
    }
    handleChangeOrder();
  };

  const dragItem = (e) => controls.start(e);
  return (
    <>
      <Reorder.Item
        key={id}
        value={taskData}
        className={s.listItem}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        dragControls={controls}
        dragListener={false}>
        <label
          className={s.label}
          onPointerDown={dragItem}
          onDragEnd={onDragEnd}>
          <input type="checkbox" className={s.defaultCheckbox} />
          <div
            className={isCompleted ? checkboxDone : checkbox}
            onClick={onDoneTask}></div>
        </label>
        <Link to={`/task/${id}`} className={s.title}>
          {title || "New task"}
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
  titleOffset: PropTypes.number,
};
