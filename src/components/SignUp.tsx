import { push } from "connected-react-router";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button, TextInput, TextLink } from "../components/UIkit";
import { signup } from "../reducks/users/operations";

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputUsername = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

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

  const inputConfirmPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(event.target.value);
    },
    [setConfirmPassword]
  );

  return (
    <SignupContainer>
      <h2 className="title">SignUp</h2>
      <TextInput
        label={"username"}
        value={username}
        onChange={inputUsername}
      />
      <TextInput
        label={"email"}
        value={email}
        onChange={inputEmail}
      />
      <TextInput
        label={"password"}
        type={"password"}
        value={password}
        onChange={inputPassword}
      />
      <TextInput
        label={"password"}
        type={"password"}
        value={confirmPassword}
        onChange={inputConfirmPassword}
      />
      <Button
        label={"SignUp"}
        action={() =>
          dispatch(signup(username, email, password, confirmPassword))
        }
      />
      <div className="sub-menu">
        <TextLink text={""} action={() => alert("いいい")} />
        <TextLink
          text={"Signin"}
          action={() => dispatch(push("/signin"))}
        />
      </div>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  .title {
    font-size: 24px;
    margin-bottom: 32px;
    color: #fff;
  }
  .sub-menu {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    color: #fff;
  }
`;

export default SignUp;
