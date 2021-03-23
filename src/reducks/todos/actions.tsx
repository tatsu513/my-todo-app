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
