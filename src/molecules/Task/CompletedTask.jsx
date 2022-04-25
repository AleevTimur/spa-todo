import React from "react";
import { Reorder } from "framer-motion";
import { Link } from "react-router-dom";

import s from "./styles.module.scss";

export const CompletedTask = ({
  taskData,
  handleChangeComplete,
  titleOffset,
}) => {
  const { id, title } = taskData;

  const onClickCheckbox = () => {
    handleChangeComplete(id);
  };
  const onDragEnd = (e) => {
    console.log(e.y, titleOffset);
    if (titleOffset > e.y - 100) {
      handleChangeComplete(id);
    }
  };

  return (
    <Reorder.Item
      key={id}
      value={taskData}
      className={s.listItem}
      onDragEnd={onDragEnd}>
      <label className={s.label}>
        <input type="checkbox" className={s.defaultCheckbox} />
        <div
          className={[s.checkbox, s.checkboxDone].join(" ")}
          onClick={onClickCheckbox}></div>
      </label>
      <Link to={`/task/${id}`} className={s.title}>
        {title}
      </Link>
    </Reorder.Item>
  );
};
