import { useSelector } from "react-redux";

export const useGetMicroTasks = () => {
  const test = useSelector((state) => state.microTasks.list);
  return useSelector((state) => state.microTasks.list);
};
