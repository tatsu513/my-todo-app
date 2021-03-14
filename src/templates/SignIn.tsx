import { push } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>サインイン</h2>
      <button onClick={() => dispatch(push("/"))}>ホームへ</button>
    </div>
  );
};

export default SignIn;
