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

export type todoState = {
  name: string;
  limitDate: Date;
  category: string;
  memo: string;
};
