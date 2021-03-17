import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
};

const Button: React.FC<Props> = (props) => {
  return <button>{props.label}</button>;
};

export default Button;
