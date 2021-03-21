import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

type Props = {
  label: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const PrimaryButton: React.FC<Props> = (props) => {
  return (
    <CustomLocalButton
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={props.onClick}
    >
      {props.label}
    </CustomLocalButton>
  );
};

const CustomLocalButton = styled(Button)`
  height: 40px;
  border-radius: 20px;
  color: #fff;
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
  }
`;

export default PrimaryButton;
