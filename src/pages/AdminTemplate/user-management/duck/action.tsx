import { simpleActionCreator } from "../../../../utils/actionUtils";
import api from "../../../../utils/apiUtils";
import * as types from "./types";

export const fetchUsers = () => {
  return (dispatch: any) => {
    api
      .get("users")
      .then((result) => dispatch(fetchUsersSuccess(result.data.content)))
      .catch((error) => dispatch(fetchUsersFail(error.response.data.content)));
  };
};

export const fetchUser: any = (id: number) => {
  return (dispatch: any) => {
    dispatch(fetchUserRequest());
    api
      .get(`users/${id}`)
      .then((result) => {
        dispatch(fetchUserSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(fetchUserFail(error));
      });
  };
};

const fetchUsersSuccess = simpleActionCreator(types.FETCH_USERS_SUCCESS);
const fetchUsersFail = simpleActionCreator(types.FETCH_USERS_FAIL);

const fetchUserRequest = () => ({ type: types.FETCH_USER_REQUEST });
const fetchUserSuccess = simpleActionCreator(types.FETCH_USER_SUCCESS);
const fetchUserFail = simpleActionCreator(types.FETCH_USER_SUCCESS);
