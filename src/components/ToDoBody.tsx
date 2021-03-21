import React, { useCallback, useState } from "react";
import { PrimaryButton } from "../components/UIkit/index";
import styled from "styled-components";
import { SecondaryChip, Switch } from "../components/UIkit/index";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { AddToDoModal } from "../components/modal/";

const ToDoBody = () => {
  const [state, setState] = useState(true);
  const [isOpenAddTodoModal, setIsOpenAddTodoModal] = useState(false);
  const [name, setName] = useState("");
  const [limitDate, setLimitDate] = useState("");
  const [category, setCategory] = useState("");
  const [memo, setMemo] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState(event.target.checked);
  };

  const openAddTodoModal = useCallback(() => {
    setIsOpenAddTodoModal(true);
  }, []);

  const closeAddTodoModal = useCallback(() => {
    setIsOpenAddTodoModal(false);
  }, []);

  return (
    <ToDoBodyWrapper>
      <Controller>
        <PrimaryButton
          label={"TODOを追加"}
          onClick={openAddTodoModal}
        />
      </Controller>
      <ul>
        <ToDoItem>
          <div className="switch-erea">
            <Switch
              checked={state}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="content-erea">
            <div className="content-title">夕飯の買い物</div>
            <div className="content-date">
              登録日：2020-03-30／期限日：2020-03-30
            </div>
            <ul className="content-category">
              <li>
                <SecondaryChip label={"カテゴリ"} />
              </li>
            </ul>
          </div>
          <div className="delete-erea">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
        </ToDoItem>
      </ul>
      <AddToDoModal
        isOpen={isOpenAddTodoModal}
        onClose={closeAddTodoModal}
      />
    </ToDoBodyWrapper>
  );
};

const ToDoBodyWrapper = styled.div`
  width: 100%;
`;

const Controller = styled.div`
  margin-bottom: 16px;
  text-align: right;
`;

const ToDoItem = styled.li`
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid ${(props) => props.theme.palette.grey.line};
  display: flex;
  &:last-of-type {
    border-bottom: 1px solid
      ${(props) => props.theme.palette.grey.line};
  }
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.light};
  }
  .switch-erea {
    flex-basis: 9%;
  }
  .content-erea {
    flex-basis: 84%;
    .content-title {
      margin-bottom: 8px;
      font-size: 16px;
      font-weight: bold;
    }
    .content-date {
      font-size: 12px;
    }
    .content-category {
      margin-top: 8px;
    }
  }
  .delete-erea {
    flex-basis: 5%;
    text-align: center;
  }
`;

export default ToDoBody;
