import React, { useCallback, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  InputDatePicker,
  SelectBox,
} from "../../components/UIkit/index";
import { InputText } from "../UIkit/index";
import { createTodo } from "../../reducks/todos/operations";
import { useDispatch, useSelector } from "react-redux";
import { SecondaryButton } from "../UIkit/index";
import { getCategories } from "../../reducks/users/selectore";

type Props = {
  isOpen: boolean;
  onClose: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const AddToDoModal: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state);
  const categories = getCategories(selector);

  const [name, setName] = useState("");
  const [limitDate, setLimitDate] = useState(new Date());
  const [category, setCategory] = useState("");
  const [memo, setMemo] = useState("");

  const InputName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    []
  );

  const InputLimitDate = useCallback((date: Date | null) => {
    if (date === null) return;
    setLimitDate(new Date(date));
  }, []);

  const SelectedCategory = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      setCategory(event.target.value as string);
    },
    []
  );

  const InputMemo = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMemo(event.target.value);
    },
    []
  );

  const createTodoSubmit = useCallback(() => {
    console.log(name);
    dispatch(createTodo(name, limitDate, category, memo));
  }, [dispatch, name, limitDate, category, memo]);

  return (
    <div>
      <Dialog
        open={props.isOpen}
        onClose={props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          ToDoを追加する
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            追加するToDoの詳細を入力してください。
          </DialogContentText>
          <InputText
            id={"todo-name"}
            label={"ToDoタイトル"}
            type={"text"}
            value={name}
            fullWidth={true}
            multiline={false}
            rows={0}
            onChange={InputName}
          />
          <InputDatePicker
            id={"limit-date"}
            value={limitDate}
            label={"期限日"}
            onChange={InputLimitDate}
          />
          <SelectBox
            label={"Category"}
            inputId={"category"}
            selectBoxId={"category-select"}
            value={category}
            items={categories}
            onChange={SelectedCategory}
          />
          <InputText
            id={"todo-memo"}
            label={"備考"}
            type={"textarea"}
            value={memo}
            fullWidth={true}
            multiline={true}
            rows={4}
            onChange={InputMemo}
          />
        </DialogContent>
        <DialogActions>
          <SecondaryButton
            label={"TODO追加"}
            color={"primary"}
            onClick={createTodoSubmit}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddToDoModal;
