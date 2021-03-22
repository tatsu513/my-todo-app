import { createTodoAction } from "./actions";
import { push } from "connected-react-router";
import { auth, db, FirebaseTimetamp, provider } from "../../firebase";
import { Dispatch } from "redux";

export const createTodo = (
  name: string,
  limitDate: Date | string,
  category: string,
  memo: string
) => {
  return async (dispatch: Dispatch) => {
    console.log(name);
    console.log(limitDate);
    console.log(category);
    console.log(memo);
  };
};
