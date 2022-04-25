export const saveToLocalStorage = (store) => (next) => (action) => {
  const state = store.getState();
  localStorage.setItem("mainTasks", JSON.stringify(state.mainTasks));
  localStorage.setItem("microTasks", JSON.stringify(state.microTasks));

  return next(action);
};
