import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

type Props = {
  isOpen: boolean;
  onClose: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const AddToDoModal: React.FC<Props> = (props) => {
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ToDoタイトル"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => alert("primary")} color="primary">
            Cancel
          </Button>
          <Button onClick={() => alert("primary")} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddToDoModal;
