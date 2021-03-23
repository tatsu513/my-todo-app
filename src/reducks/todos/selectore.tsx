import { createSelector } from "reselect";
import { todoState } from "../store/types";

const todoSelector = (state: any): todoState => {
  return state.todo;
};

export const getTodoList = createSelector(
  [todoSelector],
  (state) => state.todoList
);
