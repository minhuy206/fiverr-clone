import api from "../../../../utils/apiUtils";
import * as ActionType from "./type";

const getDetailUser = (id: number) => {
  return (dispatch: any) => {
    dispatch(DetailUserRequest());
    api
      .get(`users/${id} `)
      .then((result) => {
        dispatch(DetailUserSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(DetailUserFail(error));
      });
  };
};
const DetailUserRequest = () => {
  return {
    type: ActionType.DETAIL_USER_HOME_REQUEST,
  };
};
const DetailUserSuccess = (data: any) => {
  return {
    type: ActionType.DETAIL_USER_HOME_SUCCESS,
    payload: data,
  };
};
const DetailUserFail = (error: any) => {
  return {
    type: ActionType.DETAIL_USER_HOME_FAIL,
    payload: error,
  };
};
