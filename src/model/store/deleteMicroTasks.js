import { DELETE_TASK } from "./mainTasks/actions";

export const deleteMicroTasks = (store) => (next) => (action) => {
  const state = store.getState();
  if (action.type === DELETE_TASK) {
    const pageId = action.payload;
    delete state.microTasks.list[pageId];
  }
  return next(action);
};
