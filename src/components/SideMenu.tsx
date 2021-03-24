import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { AddCategoryModal } from "./modal/index";
import { getCategories } from "../reducks/users/selectore";
import { useSelector } from "react-redux";

type Props = {
  onClick: (id: string | number) => void;
};

const SideMenu: React.FC<Props> = ({ onClick }) => {
  const selector = useSelector((state) => state);
  const categories = getCategories(selector);
  const [
    isOpenAddCategoryModal,
    setIsOpenAddCategoryModal,
  ] = useState(false);

  const openAddCategoryModal = useCallback(() => {
    setIsOpenAddCategoryModal(true);
  }, []);

  const closeAddCategoryModal = useCallback(() => {
    setIsOpenAddCategoryModal(false);
  }, []);

  return (
    <SideBarWrapper>
      <MenuTitle className="menu-text">タスクの絞り込み</MenuTitle>
      <SideMunuContainer>
        <ul className="menu">
          <li className="menu-item" onClick={() => onClick(0)}>
            すべて
          </li>
          {categories.length > 0 &&
            categories.map((category) => (
              <li
                key={category.id}
                className="menu-item"
                onClick={() => onClick(category.id)}
              >
                {category.name}
              </li>
            ))}
        </ul>
      </SideMunuContainer>
      <AddCategory>
        <Button
          color="primary"
          startIcon={<AddIcon />}
          onClick={openAddCategoryModal}
        >
          カテゴリ追加
        </Button>
      </AddCategory>
      <AddCategoryModal
        isOpen={isOpenAddCategoryModal}
        onClose={closeAddCategoryModal}
      />
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled.div`
  margin-right: 16px;
  width: 240px;
`;

const MenuTitle = styled.div`
  margin-bottom: 12px;
  color: ${(props) => props.theme.palette.text.secondary};
  font-size: 12px;
`;

const AddCategory = styled.div`
  width: 100%;
  margin-top: 8px;
  text-align: right;
`;

const SideMunuContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 0 8px rgb(0 0 0 / 20%);
  .menu {
    width: 100%;
  }
  .menu-item {
    padding: 0 16px;
    border-bottom: 1px solid #ececec;
    cursor: pointer;
    line-height: 40px;
    &:hover {
      background: ${(props) => props.theme.palette.primary.light};
    }
    &:last-of-type {
      border-bottom: none;
    }
  }
`;

export default SideMenu;
