import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { SignIn } from "../reducks/users/operations";
import backgroundImage from "../assets/images/login-back.png";
import styled from "styled-components";
import { TextInput } from "../components/UIkit";
import {} from "../components/UIkit";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <SigninBox style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay" />
      <SigninContainer>
        <LoginTitle>Login</LoginTitle>
        <TextInput label={"email"} />
        <TextInput label={"password"} />
      </SigninContainer>
    </SigninBox>
  );
};

const SigninBox = styled.div`
  height: 100vh;
  position: relative;
  background-size: cover;
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    opacity: 0.4;
  }
`;

const SigninContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  padding-top: 88px;
  position: relative;
  text-align: center;
`;

const LoginTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 32px;
  color: #fff;
`;

export default Login;
