import React from "react";
import { SignIn, SignUp } from "../components/";
import styled from "styled-components";
import backgroundImage from "../assets/images/login-back.png";

const pathname = window.location.pathname;
const IsSignIn = pathname.split("/")[1] === "signin";

const Account: React.FC = () => {
  return (
    <AccountWrap
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay" />
      <div className="container">
        {IsSignIn ? <SignIn /> : <SignUp />}
      </div>
    </AccountWrap>
  );
};

const AccountWrap = styled.div`
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

  .container {
    width: 320px;
    margin: 0 auto;
    padding-top: 88px;
    position: relative;
    text-align: center;
  }
`;

export default Account;
