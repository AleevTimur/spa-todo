import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const useGetCurrentTaskPage = () => {
  const tasks = useSelector((state) => state.mainTasks.list);
  const { id } = useParams();

  return tasks.find((task) => task.id === id);
};
