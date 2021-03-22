import React, { useCallback, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { InputText } from "../UIkit/index";
import { addCategory } from "../../reducks/users/operations";
import { useDispatch } from "react-redux";
import { SecondaryButton } from "../UIkit/index";

type Props = {
  isOpen: boolean;
  onClose: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const AddToDoModal: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const InputName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    []
  );

  const addCategoryMethod = useCallback(
    (event) => {
      dispatch(addCategory(name));
      setName("");
      props.onClose(event);
    },
    [dispatch, name, props]
  );

  return (
    <div>
      <Dialog
        open={props.isOpen}
        onClose={props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          カテゴリを追加する
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            追加するカテゴリの名称を入力してください。
          </DialogContentText>
          <InputText
            id={"category-name"}
            label={"カテゴリ名"}
            type={"text"}
            value={name}
            fullWidth={true}
            multiline={false}
            rows={0}
            onChange={InputName}
          />
        </DialogContent>
        <DialogActions>
          <SecondaryButton
            label={"カテゴリ追加"}
            color={"primary"}
            onClick={addCategoryMethod}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddToDoModal;
