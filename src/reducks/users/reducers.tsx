import * as Actions from "./actions";
import { initialState } from "../store/initialState";

type Action = {
  type: string;
  payload: {};
};

export const UsersReducer = (state = initialState.users, action: Action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SIGN_OUT:
      return {
        ...initialState.users,
      };
    default:
      return state;
  }
};
