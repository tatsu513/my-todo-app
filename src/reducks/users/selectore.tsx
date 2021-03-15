import { createSelector } from "reselect";
import { userState } from "../store/types";

const usersSelector = (state: any): userState => {
  console.log(state);
  return state.users;
};

export const getUserId = createSelector([usersSelector], (state) => state.uid);
