export const initialState = {
  users: {
    isSignedIn: false,
    uid: "",
    userName: "",
    role: "",
    categories: [],
  },
  todos: {
    todoList: [],
  },
  // todo: {
  //   id: "",
  //   name: "タスク",
  //   limitDate: "",
  //   category: "",
  //   memo: "",
  //   activeState: true,
  //   createdAt: "",
  // },
};

export default initialState;
