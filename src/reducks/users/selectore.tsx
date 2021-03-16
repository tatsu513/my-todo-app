import { createSelector } from "reselect";
import { usersState } from "../store/types";

const usersSelector = (state: any): usersState => {
  console.log(state);
  return state.users;
};

export const getUserId = createSelector([usersSelector], (state) => state.uid);
