import { todoState } from "../store/types";

export const CREATE_TODO = "CREATE_TODO";
export const createTodoAction = (todo: todoState) => {
  return {
    type: "CREATE_TODO",
    payload: {
      name: todo.name,
      limitDate: todo.limitDate,
      category: todo.category,
      memo: todo.memo,
    },
  };
};
