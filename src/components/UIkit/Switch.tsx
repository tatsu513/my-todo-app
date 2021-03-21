import React from "react";
import { Switch } from "@material-ui/core/";
import styled from "styled-components";

type Props = {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const LocalSwitch: React.FC<Props> = (props) => {
  return (
    <Switch
      checked={props.checked}
      onChange={props.onChange}
      color="primary"
      name="checked"
    />
  );
};

const CustomSwitch = styled(Switch)``;

export default LocalSwitch;
