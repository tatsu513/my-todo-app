import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
};

const Button: React.FC<Props> = (props) => {
  return <Btn>{props.label}</Btn>;
};

const Btn = styled.button`
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 20px;
  color: #585858;
  font-size: 16px;
  cursor: pointer;
`;

export default Button;
