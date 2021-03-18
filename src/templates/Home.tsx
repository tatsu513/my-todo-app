import React from "react";
import { useSelector } from "react-redux";
import { getUserId, getUserName } from "../reducks/users/selectore";

const Home: React.FC = () => {
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);
  return (
    <div>
      <h2>ホームー</h2>
      <p>uid：{uid}</p>
      <p>username：{username}</p>
    </div>
  );
};

export default Home;
