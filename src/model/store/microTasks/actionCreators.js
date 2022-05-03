import { uid } from "uid";
import {
  ADD_MICROLIST,
  ADD_MICROLIST_HERE,
  ADD_MICROTEXT,
  DELETE_MICROTASK,
  EDIT_MICROTASK,
} from "./actions";

export const addMicroList = ({ pageId, value }) => ({
  type: ADD_MICROLIST,
  payload: {
    pageId,
    value,
    tag: "listItem",
    id: uid(4),
  },
});

export const addMicroListHere = ({ previousTaskId, pageId, value }) => ({
  type: ADD_MICROLIST_HERE,
  payload: {
    pageId,
    value,
    tag: "listItem",
    id: uid(4),
    previousTaskId,
  },
});

export const addMicroText = ({ pageId, value }) => ({
  type: ADD_MICROTEXT,
  payload: {
    pageId,
    value,
    tag: "text",
    id: uid(4),
  },
});

export const editMicroTask = ({ value, taskId, pageId }) => ({
  type: EDIT_MICROTASK,
  payload: { value, taskId, pageId },
});

export const deleteMicroTask = (taskId, pageId) => ({
  type: DELETE_MICROTASK,
  payload: { taskId, pageId },
});
