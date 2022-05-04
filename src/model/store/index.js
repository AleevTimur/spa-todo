import { applyMiddleware, combineReducers, createStore } from "redux";
import { mainTasks } from "./mainTasks";
import { microTasks } from "./microTasks";
import { deleteMicroTasks } from "./deleteMicroTasks";

const rootReducer = combineReducers({
  mainTasks,
  microTasks,
});
export const store = createStore(
  rootReducer,
  applyMiddleware(deleteMicroTasks)
);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("mainTasks", JSON.stringify(state.mainTasks));
  localStorage.setItem("microTasks", JSON.stringify(state.microTasks));
});
