import { usersState } from "../store/types";
export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState: usersState) => {
  return {
    type: "SIGN_IN",
    payload: userState,
  };
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: null,
  };
};
