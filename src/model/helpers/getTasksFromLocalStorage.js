export const getTasksFromLocalStorage = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasks");
  return JSON.parse(tasksFromLocalStorage);
};
