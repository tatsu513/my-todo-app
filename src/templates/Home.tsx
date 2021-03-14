import { push } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>ホーム</h2>
      <button onClick={() => dispatch(push("/signin"))}>ログインする</button>
    </div>
  );
};

export default Home;
