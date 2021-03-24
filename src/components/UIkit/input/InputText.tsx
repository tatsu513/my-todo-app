import React from "react";
import TextField from "@material-ui/core/TextField";

type Props = {
  id: string;
  label: string;
  type: string;
  value: string | number;
  fullWidth: boolean;
  multiline: boolean;
  rows: number;
  autoFocus: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputText: React.FC<Props> = (props) => {
  return (
    <TextField
      autoFocus={props.autoFocus}
      margin="dense"
      id={props.id}
      label={props.label}
      type={props.type}
      value={props.value}
      fullWidth={props.fullWidth}
      multiline={props.multiline}
      rows={props.rows}
      onChange={props.onChange}
    />
  );
};

export default InputText;
