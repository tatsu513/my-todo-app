import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import styled from "styled-components";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

type Props = {
  value: Date;
  onChange: (
    date: MaterialUiPickersDate,
    value?: string | null | undefined
  ) => void;
};

const InputDatePicker: React.FC<Props> = (props) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <FormWrapper
        disableToolbar
        variant="inline"
        format="yyyy/MM/dd"
        margin="normal"
        id="date-picker-inline"
        label="Date picker inline"
        value={props.value}
        onChange={props.onChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

const FormWrapper = styled(KeyboardDatePicker)`
  width: 100%;
`;

export default InputDatePicker;
