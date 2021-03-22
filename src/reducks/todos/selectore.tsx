import { createSelector } from "reselect";
import { todoState } from "../store/types";

const todoSelector = (state: any): todoState => {
  return state.todo;
};

export const getName = createSelector(
  [todoSelector],
  (state) => state.name
);
