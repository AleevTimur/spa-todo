import React, { useState } from "react";
import { Calendar } from "react-calendar";
import s from "./styles.module.scss";
import "./calendar.scss";
import { parseDate } from "model/helpers/parseDate";
import { useDispatch } from "react-redux";
import { changeDeadlineDate } from "model/store/mainTasks/actionCreators";

export const CalendarButton = ({ deadline, taskId }) => {
  const dispatch = useDispatch();
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const onToggleCalendar = () => {
    setIsOpenCalendar(!isOpenCalendar);
  };
  const onChangeDate = (value) => {
    dispatch(changeDeadlineDate(taskId, value));
    setIsOpenCalendar(false);
  };
  console.log(deadline);
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
