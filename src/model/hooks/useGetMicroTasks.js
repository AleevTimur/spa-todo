import { useSelector } from "react-redux";

export const useGetMicroTasks = (pageId) => {
  return useSelector((state) => state.microTasks.list[pageId]);
};
