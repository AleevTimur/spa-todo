import {
  ADD_TASK,
  CHANGE_TITLE,
  CHANGE_TASK_COMPLETE,
  DELETE_TASK,
  CHANGE_DEADLINE_DATE,
} from "./actions";

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: title,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const changeTaskCopmlete = (id) => ({
  type: CHANGE_TASK_COMPLETE,
  payload: id,
});

export const changeTitle = (id, value) => ({
  type: CHANGE_TITLE,
  payload: { id, value },
});

export const changeDeadlineDate = (id, value) => ({
  type: CHANGE_DEADLINE_DATE,
  payload: { id, value },
});
