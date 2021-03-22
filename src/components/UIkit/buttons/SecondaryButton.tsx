import React from "react";
import { Button } from "@material-ui/core";

type Props = {
  label: string;
  color: "default" | "inherit" | "primary" | "secondary" | undefined;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const SecondaryButton: React.FC<Props> = (props) => {
  return (
    <Button onClick={props.onClick} color={props.color}>
      {props.label}
    </Button>
  );
};

export default SecondaryButton;
