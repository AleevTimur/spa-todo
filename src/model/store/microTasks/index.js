import {
  ADD_MICROLIST,
  ADD_MICROLIST_HERE,
  ADD_MICROTEXT,
  DELETE_MICROTASK,
  EDIT_MICROTASK,
} from "./actions";

const listFromLocalStorage = JSON.parse(localStorage.getItem("microTasks"));

const initialState = {
  list: listFromLocalStorage?.list || [],
};

export const microTasks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MICROLIST:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case ADD_MICROLIST_HERE:
      const previousId = action.payload.previousTaskId;
      const foundedPreviousTask = state.list.findIndex(
        (listItem) => listItem.id === previousId
      );
      state.list.splice(foundedPreviousTask + 1, 0, action.payload);

      return {
        ...state,
        list: [...state.list],
      };
    case ADD_MICROTEXT:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case EDIT_MICROTASK:
      return {
        ...state,
        list: state.list.map((microTask) => {
          if (microTask.id === action.payload.taskId) {
            microTask.value = action.payload.value;
          }
          return microTask;
        }),
      };
    case DELETE_MICROTASK:
      console.log(action.payload);
      return {
        ...state,
        list: state.list.filter(
          (microTask) => microTask.id !== action.payload.taskId
        ),
      };
    default:
      return state;
  }
};
