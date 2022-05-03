import {
  ADD_MICROLIST,
  ADD_MICROLIST_HERE,
  ADD_MICROTEXT,
  DELETE_MICROTASK,
  EDIT_MICROTASK,
} from "./actions";

const listFromLocalStorage = JSON.parse(localStorage.getItem("microTasks"));

const initialState = {
  list: listFromLocalStorage?.list || {},
};

export const microTasks = (state = initialState, action) => {
  const currentPageId = action.payload?.pageId;
  switch (action.type) {
    case ADD_MICROLIST:
      console.log("add list", state);
      const newMicroTask = {
        id: action.payload.id,
        tag: action.payload.tag,
        value: action.payload.value,
      };
      return {
        ...state,
        list: {
          ...state.list,
          [currentPageId]: [...(state.list[currentPageId] || []), newMicroTask],
        },
      };
    case ADD_MICROLIST_HERE:
      const previousId = action.payload.previousTaskId;
      const foundedPreviousTask = state.list[currentPageId].findIndex(
        (listItem) => listItem.id === previousId
      );
      state.list[currentPageId].splice(
        foundedPreviousTask + 1,
        0,
        action.payload
      );

      return {
        ...state,
        list: {
          ...state.list,
          [currentPageId]: [...state.list[currentPageId]],
        },
      };
    case ADD_MICROTEXT:
      return {
        ...state,
        list: {
          ...state.list,
          [currentPageId]: [
            ...(state.list[currentPageId] || []),
            action.payload,
          ],
        },
      };
    case EDIT_MICROTASK:
      return {
        ...state,
        list: {
          ...state.list,
          [currentPageId]: state.list[currentPageId].map((microTask) => {
            if (microTask.id === action.payload.taskId) {
              microTask.value = action.payload.value;
            }
            return microTask;
          }),
        },
      };
    case DELETE_MICROTASK:
      return {
        ...state,
        list: {
          ...state.list,
          [currentPageId]: state.list[currentPageId].filter(
            (microTask) => microTask.id !== action.payload.taskId
          ),
        },
      };
    default:
      return state;
  }
};
