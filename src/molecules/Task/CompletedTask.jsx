import { Reorder } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import s from "./styles.module.scss";

export const CompletedTask = ({ taskData, handleChangeComplete }) => {
  const { id, title } = taskData;
  const onClickCheckbox = () => {
    handleChangeComplete(id);
  };
  return (
    <Reorder.Item key={id} value={taskData} className={s.listItem}>
      <label className={s.label}>
        <input type="checkbox" className={s.defaultCheckbox} />
        <div
          className={[s.checkbox, s.checkboxDone].join(" ")}
          onClick={onClickCheckbox}
        ></div>
      </label>
      <Link to={`/task/${id}`} className={s.title}>
        {title}
      </Link>
    </Reorder.Item>
  );
};
