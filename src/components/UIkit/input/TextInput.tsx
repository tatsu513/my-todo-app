import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";

type Props = {
  label: string;
  value: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<Props> = (props) => {
  return (
    <StyledTextField
      fullWidth={true}
      label={props.label}
      margin="dense"
      multiline={false}
      required={true}
      rows={0}
      value={props.value}
      variant="outlined"
      type={props.type ? props.type : "text"}
      onChange={props.onChange}
    />
  );
};

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 20px;
    &.Mui-focused .MuiOutlinedInput-notchedOutline,
    &:hover .MuiOutlinedInput-notchedOutline {
      border: 1px solid #fff;
    }
  }
  .MuiInputBase-root {
    color: #fff;
  }
  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #fff;
  }
  .MuiFormLabel-root {
    color: #fff;
    opacity: 0.5;
    &.Mui-focused {
      color: #fff;
    }
  }
`;

export default TextInput;
