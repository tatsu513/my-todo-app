import { usersState } from "../store/types";

export const ADD_CATEGORY = "ADD_CATEGORY";
export const addCategoryAction = (category: { name: string }) => {
  return {
    type: "ADD_CATEGORY",
    payload: {
      name: category.name,
    },
  };
};

export const FEATCH_CATEGORIES = "FEATCH_CATEGORIES";
export const fetchCategoriesAction = (
  categories: { id: string; name: string }[]
) => {
  return {
    type: "FEATCH_CATEGORIES",
    payload: {
      categories: categories,
    },
  };
};

export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState: usersState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      role: userState.role,
      uid: userState.uid,
      userName: userState.userName,
    },
  };
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: true,
      role: "",
      uid: "",
      userName: "",
    },
  };
};
