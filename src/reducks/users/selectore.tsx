import { createSelector } from "reselect";
import { usersState } from "../store/types";

const usersSelector = (state: any): usersState => {
  return state.users;
};

export const getUserId = createSelector(
  [usersSelector],
  (state) => state.uid
);

export const getUserName = createSelector(
  [usersSelector],
  (state) => state.userName
);
