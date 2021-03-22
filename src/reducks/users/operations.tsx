import {
  fetchCategoriesAction,
  signInAction,
  signOutAction,
} from "./actions";
import { push } from "connected-react-router";
import { auth, db, FirebaseTimetamp, provider } from "../../firebase";
import { Dispatch } from "redux";

export const addCategory = (name: string) => {
  return async (dispatch: Dispatch, getState: any) => {
    const timeStamp = FirebaseTimetamp.now();
    if (name === "") {
      alert("カテゴリ名称が空です。");
      return false;
    } else {
      const uid = getState().users.uid;
      const categoryRef = db
        .collection("users")
        .doc(uid)
        .collection("categories")
        .doc();
      const addData = {
        id: categoryRef.id,
        name: name,
        created_at: timeStamp,
        update_at: timeStamp,
      };
      categoryRef.set(addData);
    }
  };
};

export const fetchCategories = () => {
  return async (dispatch: Dispatch, getState: any) => {
    const uid = getState().users.uid;
    db.collection("users")
      .doc(uid)
      .collection("categories")
      .orderBy("created_at", "asc")
      .get()
      .then((snapshots) => {
        const list: { id: string; name: string }[] = [];
        snapshots.forEach((snapshot) => {
          const data = snapshot.data();
          list.push({
            id: data.id,
            name: data.name,
          });
        });
        dispatch(fetchCategoriesAction(list));
      });
  };
};

export const listenAuthState = () => {
  return async (dispatch: Dispatch) => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();

            dispatch(
              signInAction({
                isSignedIn: true,
                role: "customer",
                uid: data!.uid,
                userName: data!.username,
                categories: [],
              })
            );

            dispatch(push("/"));
          });
      } else {
        dispatch(push("/signin"));
      }
    });
  };
};

export const SignIn = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    if (email === "" || password === "") {
      alert("未入力");
      return false;
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;

        if (user) {
          const uid = user.uid;
          db.collection("users")
            .doc(uid)
            .get()
            .then((snapshot) => {
              const data = snapshot.data();

              dispatch(
                signInAction({
                  isSignedIn: true,
                  role: data!.role,
                  uid: data!.uid,
                  userName: data!.username,
                  categories: [],
                })
              );

              dispatch(push("/"));
            });
        }
      });
  };
};

export const SignWithGoogle = () => {
  return async (dispatch: Dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const timestamp = FirebaseTimetamp.now();

        if (user) {
          dispatch(
            signInAction({
              isSignedIn: true,
              role: "customer",
              uid: user.uid,
              userName: user.displayName || "",
              categories: [],
            })
          );
          const userInitialData = {
            created_at: timestamp,
            email: user.email,
            role: "cusotmer",
            uid: user.uid,
            update_at: timestamp,
            username: user.displayName,
          };

          db.collection("users")
            .doc(user.uid)
            .set(userInitialData)
            .then(() => dispatch(push("/")));
        }
        dispatch(push("/"));
      })
      .catch((err) => alert(err));
  };
};

export const signup = (
  username: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  return async (dispatch: Dispatch) => {
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("必須が空です");
      return false;
    }
    if (password !== confirmPassword) {
      alert("パスワードが一致していません");
      return false;
    }

    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;

        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimetamp.now();

          const userInitialData = {
            created_at: timestamp,
            email: email,
            role: "cusotmer",
            uid: uid,
            update_at: timestamp,
            username: username,
          };

          db.collection("users")
            .doc(uid)
            .set(userInitialData)
            .then(() => dispatch(push("/")));
        }
      });
  };
};

export const signOut = () => {
  return async (dispatch: Dispatch) => {
    auth.signOut().then(() => {
      dispatch(signOutAction());
      dispatch(push("/signin"));
    });
  };
};

export const resetPassword = (email: string) => {
  return async (dispatch: Dispatch) => {
    if (email === "") {
      alert("メールアドレスが未入力です");
      return false;
    } else {
      auth.sendPasswordResetEmail(email).then(() => {
        alert("パスワード変更用のメールを送信しました。");
        dispatch(push("/signin"));
      });
    }
  };
};
