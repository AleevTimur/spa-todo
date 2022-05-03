import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Calendar } from "react-calendar";

import s from "./styles.module.scss";
import "./calendar.scss";

import { parseDate } from "model/helpers/parseDate";
import { changeDeadlineDate } from "model/store/mainTasks/actionCreators";

export const DeadlineChanger = ({ deadline, taskId }) => {
  const dispatch = useDispatch();
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const onToggleCalendar = () => {
    setIsOpenCalendar(!isOpenCalendar);
  };
  const onChangeDate = (value) => {
    dispatch(changeDeadlineDate(taskId, value.toISOString()));
    setIsOpenCalendar(false);
  };

  const { date, month, year } = parseDate(deadline);

  return (
    <>
      <button onClick={onToggleCalendar} className={s.button}>
        {`${date} ${month} ${year}`}
      </button>
      {isOpenCalendar && (
        <Calendar
          className={s.calendarRoot}
          onChange={onChangeDate}
          defaultValue={new Date(deadline)}
        />
      )}
    </>
  );
};
DeadlineChanger.propTypes = {
  deadline: PropTypes.string.isRequired,
  taskId: PropTypes.string.isRequired,
};
