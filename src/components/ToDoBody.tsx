import React, { useCallback, useEffect, useState } from "react";
import { PrimaryButton } from "../components/UIkit/index";
import styled from "styled-components";
import { AddToDoModal } from "../components/modal/";
import { useSelector } from "react-redux";
import { getTodoList } from "../reducks/todos/selectore";
import { ToDoItem } from "./index";

type Props = {
  categoryId: string | number;
};

const ToDoBody: React.FC<Props> = ({ categoryId }) => {
  const selector = useSelector((state) => state);
  const todoList = getTodoList(selector);
  const [filteredList, setFilteredList] = useState(todoList);

  const [isOpenAddTodoModal, setIsOpenAddTodoModal] = useState(false);

  const openAddTodoModal = useCallback(() => {
    setIsOpenAddTodoModal(true);
  }, []);

  const closeAddTodoModal = useCallback(() => {
    setIsOpenAddTodoModal(false);
  }, []);

  useEffect(() => {
    if (categoryId === 0 || !categoryId) {
      setFilteredList(todoList);
    } else {
      setFilteredList(
        todoList.filter((todo) => todo.category === categoryId)
      );
    }
  }, [categoryId, todoList]);

  return (
    <ToDoBodyWrapper>
      <Controller>
        <PrimaryButton
          label={"TODOを追加"}
          onClick={openAddTodoModal}
        />
      </Controller>
      <ul>
        {filteredList.length > 0 &&
          filteredList.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} />
          ))}
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

export default ToDoBody;
