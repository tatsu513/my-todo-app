export type initialState = {
  users: usersState;
};

type CategoriesType = {
  id: string;
  name: string;
};

export type usersState = {
  isSignedIn: boolean;
  uid: string;
  userName: string;
  role: string;
  categories: CategoriesType[];
};

export type Todo = {
  id: string;
  name: string;
  limitDate: Date;
  category: string;
  memo: string;
  activeState: boolean;
  createdAt: any;
};

export type todoState = {
  todoList: Todo[];
};
