import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, getUserName } from "../reducks/users/selectore";
import { SideMenu, ToDoBody } from "../components/index";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);
  return (
    <Container>
      <h2 className="title">{username}さんのタスク</h2>
      <ToDoWrapper>
        <SideMenu />
        <ToDoBody />
      </ToDoWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  .title {
    margin: 24px 0 32px;
    font-size: 20px;
  }
`;

const ToDoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export default Home;
