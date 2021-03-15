import React from "react";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../reducks/users/selectore";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  return (
    <div>
      <h2>ホーム</h2>
      <p>uid：{uid}</p>
      <button onClick={() => dispatch(push("/signin"))}>ログインする</button>
    </div>
  );
};

export default Home;
