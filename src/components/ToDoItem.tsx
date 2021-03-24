import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Todo } from "../reducks/store/types";
import { SecondaryChip, Switch } from "../components/UIkit/index";
import { yyyymmdd } from "../plugins/dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  fetchTodos,
  toggleActiveState,
} from "../reducks/todos/operations";
import { getCategories } from "../reducks/users/selectore";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

type Props = {
  todo: Todo;
};

const ToDoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const categories = getCategories(selector);
  const [state, setState] = useState(true);

  const handleChange = (id: string, activeState: boolean) => {
    setState(!activeState);
    dispatch(toggleActiveState(id, !activeState));
  };

  const displayCategory = (id: string): string => {
    const category = categories.find(
      (category) => category.id === id
    );
    return category ? category.name : "";
  };

  const deleteTodoSubmit = useCallback(
    (id: string) => {
      dispatch(deleteTodo(id));
      dispatch(fetchTodos());
    },
    [dispatch]
  );

  return (
    <ToDoItem2
      key={todo.id}
      className={!todo.activeState ? "is-done" : ""}
    >
      <div className={`overlay ${!state ? "is-done" : ""}`} />
      <div className="switch-erea">
        <Switch
          checked={todo.activeState}
          onChange={() => handleChange(todo.id, todo.activeState)}
        />
      </div>
      <div className="content-erea">
        <div className="content-title">{todo.name}</div>
        <div className="content-date">
          登録日：{yyyymmdd(todo.createdAt.toDate())}
          ／期限日：
          {todo.limitDate ? yyyymmdd(todo.limitDate) : "ー"}
        </div>
        <ul className="content-category">
          <li>
            <SecondaryChip label={displayCategory(todo.category)} />
          </li>
        </ul>
      </div>
      <div className="delete-erea">
        <IconButton onClick={() => deleteTodoSubmit(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </ToDoItem2>
  );
};

const ToDoItem2 = styled.li`
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid ${(props) => props.theme.palette.grey.line};
  display: flex;
  position: relative;
  &:last-of-type {
    border-bottom: 1px solid
      ${(props) => props.theme.palette.grey.line};
  }
  &.is-done {
    &:hover {
      background-color: #fff;
    }
    .overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: ${(props) => props.theme.palette.grey[200]};
      opacity: 0.5;
    }
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

export default ToDoItem;
