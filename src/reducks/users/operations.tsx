import { signInAction } from "./actions";
import { push } from "connected-react-router";
import { initialState } from "../store/types";

export const SignIn = (email: string, password: string) => {
  return async (dispatch: any, getState: any) => {
    const state: initialState = getState();
    const isSingedIn = state.users.isSignedIn;

    if (!isSingedIn) {
      const url = "https://api.github.com/users/deatiger";
      const response = await fetch(url)
        .then((res: any) => res.json())
        .catch(() => null);
      const username = response.login;
      dispatch(
        signInAction({
          isSignedIn: true,
          uid: "00002",
          userName: username,
        })
      );
      dispatch(push("/"));
    }
  };
};
