import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { SignIn, SignWithGoogle } from "../reducks/users/operations";
import styled from "styled-components";
import { TextInput, Button, TextLink } from "./UIkit";
import { push } from "connected-react-router";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  return (
    <SigninContainer>
      <h2 className="login-title">Login</h2>
      <Button
        label={"Login with Google"}
        action={() => dispatch(SignWithGoogle())}
      />
      <p className="separator-text">or</p>
      <TextInput
        label={"email"}
        value={email}
        onChange={inputEmail}
      />
      <TextInput
        label={"password"}
        value={password}
        onChange={inputPassword}
      />
      <Button
        label={"Login"}
        action={() => dispatch(SignIn(email, password))}
      />
      <div className="sub-menu">
        <TextLink
          text={"Forgot Password"}
          action={() => alert("forget")}
        />
        <TextLink
          text={"Create Account"}
          action={() => dispatch(push("/signup"))}
        />
      </div>
    </SigninContainer>
  );
};

const SigninContainer = styled.div`
  .login-title {
    font-size: 24px;
    margin-bottom: 32px;
    color: #fff;
  }

  .separator-text {
    margin: 24px 0;
    color: #fff;
  }

  .sub-menu {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    color: #fff;
  }
`;

export default Login;
