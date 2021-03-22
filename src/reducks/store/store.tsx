import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import {
  connectRouter,
  routerMiddleware,
} from "connected-react-router";
import * as History from "history";
import thunk from "redux-thunk";
import { UsersReducer } from "../users/reducers";
import { ToDoesReducer } from "../todos/reducers";

export default function createStore(
  history: History.History<unknown>
) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
      todo: ToDoesReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
