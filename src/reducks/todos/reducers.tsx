import * as Actions from "./actions";
import { initialState } from "../store/initialState";

type Action = {
  type: string;
  payload: {};
};

export const ToDoesReducer = (
  state = initialState.todo,
  action: Action
) => {
  switch (action.type) {
    case Actions.CREATE_TODO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
