import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { signInAction } from "../reducks/users/actions";

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>サインイン</h2>
      <button
        onClick={() => {
          dispatch(signInAction({ uid: "000001", userName: "taro" }));
          dispatch(push("/"));
        }}
      >
        ホームへ
      </button>
    </div>
  );
};

export default SignIn;
