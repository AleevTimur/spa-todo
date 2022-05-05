import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Calendar } from "react-calendar";

import s from "./styles.module.scss";
import "./calendar.scss";

import { parseDate } from "model/helpers/parseDate";
import { changeDeadlineDate } from "model/store/mainTasks/actionCreators";
import { useOnClickOutside } from "model/hooks/useOnClickOutside";
import { Button } from "atoms/Button/Button";

export const DeadlineChanger = ({ deadline, taskId }) => {
  const calendarRef = useRef(null);
  const dispatch = useDispatch();
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const onToggleCalendar = () => {
    setIsOpenCalendar(!isOpenCalendar);
  };
  const onCloseCalendar = () => {
    setIsOpenCalendar(false);
  };

  useOnClickOutside(calendarRef, useCallback(onCloseCalendar, []));
  const onChangeDate = (value) => {
    dispatch(changeDeadlineDate(taskId, value.toISOString()));
    setIsOpenCalendar(false);
  };

  const { date, month, year } = parseDate(deadline);

  return (
    <div ref={calendarRef} className={s.buttonContainer}>
      <Button
        onClick={onToggleCalendar}
        variant="card"
        style={{ height: "100%" }}>{`${date} ${month} ${year}`}</Button>
      {isOpenCalendar && (
        <Calendar
          className={s.calendarRoot}
          onChange={onChangeDate}
          defaultValue={new Date(deadline)}
        />
      )}
    </div>
  );
};
DeadlineChanger.propTypes = {
  deadline: PropTypes.string.isRequired,
  taskId: PropTypes.string.isRequired,
};
