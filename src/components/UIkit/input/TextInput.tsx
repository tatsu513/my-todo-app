import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
  value: string;
  type?: string;
  onChange: Function;
};

const TextInput: React.FC<Props> = (props) => {
  return (
    <InputWrap>
      <Input
        type={props.type ? props.type : "text"}
        placeholder={props.label}
        value={props.value}
        onChange={(event) => props.onChange(event)}
      />
    </InputWrap>
  );
};

const InputWrap = styled.div`
  margin-bottom: 16px;
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  caret-color: "#fff";
  color: #fff;
  &[type="text"],
  &[type="password"] {
    padding: 0 24px;
    border: 1px solid #fff;
    border-radius: 20px;
  }
  &::placeholder {
    color: #fff;
    opacity: 0.5;
  }
`;

export default TextInput;
