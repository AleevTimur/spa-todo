import { useGetMainTasks } from "model/store/selectors";
import { useEffect, useState } from "react";

export const useGetTasks = () => {
  const tasksData = useGetMainTasks();
  const [currentTasksList, setCurrentTasksList] = useState([]);
  const [completedTasksList, setCompletedTasksList] = useState([]);

  useEffect(() => {
    const currentTasks = tasksData.filter((task) => !task.isCompleted);
    const completedTasks = tasksData.filter((task) => task.isCompleted);

    setCurrentTasksList(currentTasks);
    setCompletedTasksList(completedTasks);
  }, [tasksData]);

  return {
    currentTasksList,
    setCurrentTasksList,
    completedTasksList,
    setCompletedTasksList,
  };
};
