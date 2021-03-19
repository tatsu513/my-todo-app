import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, getUserName } from "../reducks/users/selectore";
import { signOut } from "../reducks/users/operations";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);
  return (
    <div>
      <h2>ホームー</h2>
      <p>uid：{uid}</p>
      <p>username：{username}</p>
      <button onClick={() => dispatch(signOut())}>Sign Out</button>
    </div>
  );
};

export default Home;
