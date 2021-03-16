export type initialState = {
  users: usersState;
};

export type usersState = {
  isSignedIn: boolean;
  uid: string;
  userName: string;
};
