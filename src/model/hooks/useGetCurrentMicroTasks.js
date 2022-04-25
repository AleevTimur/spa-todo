import { useGetMicroTasks } from "./useGetMicroTasks";

export const useGetCurrentMicroTasks = (pageId) => {
  const allMicroTasks = useGetMicroTasks();
  return allMicroTasks.filter((microTask) => microTask.pageId === pageId);
};
