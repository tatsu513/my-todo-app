import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

type Props = {
  onClick: Function;
  color?: string;
  label: string;
};

const AccountButton: React.FC<Props> = (props) => {
  return (
    <>
      <BaseBtn>
        {props.color === "white" ? (
          <WhiteBtn
            variant="contained"
            onClick={() => props.onClick()}
          >
            {props.label}
          </WhiteBtn>
        ) : (
          <PrimaryBtn
            variant="contained"
            onClick={() => props.onClick()}
          >
            {props.label}
          </PrimaryBtn>
        )}
      </BaseBtn>
    </>
  );
};

const BaseBtn = styled.div`
  height: 40px;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 4px;
  border-radius: 20px;
  overflow: hidden;
`;

const WhiteBtn = styled(Button)`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.palette.primary.light};
  color: ${(props) => props.theme.palette.text.primary};
  transition: background 300ms ease-out;
  cursor: pointer;
  &:hover {
    background: #dadada;
  }
`;

const PrimaryBtn = styled(Button)`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.text.primary};
  transition: background 300ms ease-out;
  cursor: pointer;
  &:hover {
    background: #dadada;
  }
`;

export default AccountButton;
