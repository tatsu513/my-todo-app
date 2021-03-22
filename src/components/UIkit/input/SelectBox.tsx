import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styled from "styled-components";

type Props = {
  label: string;
  inputId: string;
  selectBoxId: string;
  value: string;
  items: {
    value: number;
    name: string;
  }[];
  onChange:
    | ((
        event: React.ChangeEvent<{
          name?: string | undefined;
          value: unknown;
        }>,
        child: React.ReactNode
      ) => void)
    | undefined;
};

const SelectBox: React.FC<Props> = (props) => {
  return (
    <CustomFormControl>
      <InputLabel id={props.inputId}>{props.label}</InputLabel>
      <Select
        labelId={props.inputId}
        id={props.selectBoxId}
        value={props.value}
        onChange={props.onChange}
      >
        {props.items.length > 0 &&
          props.items.map((item) => {
            return (
              <MenuItem key={item.name} value={item.value}>
                {item.name}
              </MenuItem>
            );
          })}
      </Select>
    </CustomFormControl>
  );
};

const CustomFormControl = styled(FormControl)`
  width: 100%;
`;

export default SelectBox;
