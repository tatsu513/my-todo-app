import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
  action: Function;
};

const Button: React.FC<Props> = (props) => {
  return <Btn onClick={() => props.action()}>{props.label}</Btn>;
};

const Btn = styled.button`
  height: 40px;
  width: 100%;
  background: #fff;
  border: none;
  border-radius: 20px;
  color: #585858;
  font-size: 16px;
  transition: background 300ms ease-out;
  cursor: pointer;
  &:hover {
    background: #dadada;
  }
`;

export default Button;
