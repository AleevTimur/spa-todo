import { useSelector } from "react-redux";

export const useGetMainTasks = () => {
  return useSelector((state) => state.mainTasks.list);
};

export const useGetMicroTasks = () => {
  return useSelector((state) => state.list);
};
