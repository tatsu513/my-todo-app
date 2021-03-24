import { fetchTodosAction, toggleActiveStateAction } from "./actions";
import { db, FirebaseTimetamp } from "../../firebase";
import { Dispatch } from "redux";
import { Todo } from "../store/types";

export const createTodo = (
  name: string,
  limitDate: Date | string,
  category: string,
  memo: string
) => {
  return async () => {
    const timeStamp = FirebaseTimetamp.now();
    if (name === "" || category === "") {
      alert("TODOタイトル・カテゴリは必須項目です");
      return false;
    } else {
      const todosRef = db.collection("todos").doc();
      const addData = {
        id: todosRef.id,
        name: name,
        limit_date: limitDate,
        category: category,
        memo: memo,
        active_state: true,
        created_at: timeStamp,
        update_at: timeStamp,
      };
      todosRef.set(addData);
    }
  };
};

export const deleteTodo = (id: string) => {
  return async () => {
    db.collection("todos")
      .doc(id)
      .delete()
      .then(() => {
        fetchTodos();
        alert("削除しました");
      });
  };
};

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    db.collection("todos")
      .orderBy("update_at", "asc")
      .get()
      .then((snapshots) => {
        const list: Todo[] = [];
        snapshots.forEach((snapshot) => {
          const data = snapshot.data();
          list.push({
            id: data.id,
            name: data.name,
            limitDate: data.limitDate,
            category: data.category,
            memo: data.memo,
            activeState: data.active_state,
            createdAt: data.created_at,
          });
        });
        dispatch(fetchTodosAction(list));
      });
  };
};

export const toggleActiveState = (id: string, state: boolean) => {
  return async (dispatch: Dispatch, getState: any) => {
    const data = { active_state: state };
    db.collection("todos")
      .doc(id)
      .set(data, { merge: true })
      .then(() => {
        const todoList: Todo[] = getState().todo.todoList;
        const index = todoList.findIndex((todo) => todo.id === id);
        todoList[index].activeState = state;
        dispatch(toggleActiveStateAction(todoList));
      });
  };
};
