import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "../reducks/users/operations";
import styled from "styled-components";
import { TextInput, Button, TextLink } from "./UIkit";
import { push } from "connected-react-router";

const Reset: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const inputEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  return (
    <SigninContainer>
      <h2 className="login-title">Reset Password</h2>
      <TextInput
        label={"email"}
        value={email}
        onChange={inputEmail}
      />
      <Button
        label={"Reset Password"}
        action={() => dispatch(resetPassword(email))}
      />
      <div className="sub-menu">
        <TextLink text={""} action={() => alert("forget")} />
        <TextLink
          text={"Back to SignIn"}
          action={() => dispatch(push("/signin"))}
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

export default Reset;
