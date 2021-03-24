import { Todo } from "../store/types";

export const CREATE_TODO = "CREATE_TODO";
export const createTodoAction = (todos: Todo) => {
  return {
    type: "CREATE_TODO",
    payload: {
      todos: todos,
    },
  };
};

export const FETCH_TODOS = "FETCH_TODOS";
export const fetchTodosAction = (todos: Todo[]) => {
  return {
    type: "CREATE_TODO",
    payload: {
      todoList: todos,
    },
  };
};

export const TOGGLE_ACTIVE_STATE = "TOGGLE_ACTIVE_STATE";
export const toggleActiveStateAction = (todos: Todo[]) => {
  return {
    type: "TOGGLE_ACTIVE_STATE",
    payload: {
      todoList: todos,
    },
  };
};
