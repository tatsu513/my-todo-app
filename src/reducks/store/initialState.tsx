export const initialState = {
  users: {
    isSignedIn: false,
    uid: "",
    userName: "",
    role: "",
    categories: [],
  },
  todo: {
    name: "タスク",
    limitDate: "",
    category: "",
    memo: "",
  },
};

export default initialState;
