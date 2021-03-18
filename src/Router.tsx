import React from "react";
import { Route, Switch } from "react-router";
import { Home, SignIn, SignUp } from "./templates";
import backgroundImage from "./assets/images/login-back.png";
import styled from "styled-components";

// import Auth from "./Auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"(/)?"} component={Home} />
      <AccountWrap
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay" />
        <div className="container">
          <Route exact path={"/signup"} component={SignUp} />
          <Route exact path={"/signin"} component={SignIn} />
        </div>
      </AccountWrap>
    </Switch>
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

export default Router;
