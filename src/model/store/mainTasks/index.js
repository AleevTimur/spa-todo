import {
  ADD_TASK,
  CHANGE_TITLE,
  CHANGE_TASK_COMPLETE,
  DELETE_TASK,
  CHANGE_DEADLINE_DATE,
  CHANGE_ORDER,
} from "./actions";

const listFromLocalStorage = JSON.parse(localStorage.getItem("mainTasks"));
const initialState = {
  list: listFromLocalStorage?.list || [],
};

export const mainTasks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        list: [
          {
            id: action.payload.newPageId,
            title: action.payload.title,
            deadline: new Date().toISOString(),
            isCompleted: false,
          },
          ...state.list,
        ],
      };
    case CHANGE_TASK_COMPLETE:
      return {
        ...state,
        list: state.list.map((task) => {
          if (task.id === action.payload) {
            task.isCompleted = !task.isCompleted;
          }
          return task;
        }),
      };
    case CHANGE_TITLE:
      return {
        ...state,
        list: state.list.map((task) => {
          if (task.id === action.payload.id) {
            task.title = action.payload.value;
          }
          return task;
        }),
      };
    case CHANGE_ORDER:
      return {
        ...state,
        list: action.payload,
      };
    case CHANGE_DEADLINE_DATE:
      return {
        ...state,
        list: state.list.map((task) => {
          if (task.id === action.payload.id) {
            task.deadline = action.payload.value;
          }
          return task;
        }),
      };
    case DELETE_TASK:
      return {
        ...state,
        list: state.list.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};
