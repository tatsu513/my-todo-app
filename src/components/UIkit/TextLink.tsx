import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  action: Function;
};

const TextLink: React.FC<Props> = (props) => {
  return (
    <Link href="#" onClick={() => props.action()}>
      {props.text}
    </Link>
  );
};

const Link = styled.a`
  color: #fff;
  cursor: pointer;
  opacity: 1;
  text-decoration: none;
  transition: opacity 200ms ease-out;
  &:hover {
    opacity: 0.7;
  }
`;

export default TextLink;
