import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { SignIn } from "../reducks/users/operations";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>サインイン</h2>
      <button
        onClick={() => {
          dispatch(SignIn("000001", "taro"));
          dispatch(push("/"));
        }}
      >
        ログイン
      </button>
    </div>
  );
};

export default Login;
