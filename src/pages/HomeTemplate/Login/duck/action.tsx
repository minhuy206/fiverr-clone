import api from "../../../../utils/apiUtils";
import { Navigate } from "react-router-dom";
import * as ActionType from "./type";

export const actAuthLogin = (user: any, naviget: any) => {
  return (dispath: any) => {
    dispath(AuthLoginRequest());
    api
      .post("auth/signin", user)
      .then((result: any) => {
        dispath(AuthLoginSuccess(result.data.content));
        localStorage.setItem("USER", JSON.stringify(result.data.content));
        naviget("/", { replace: true });
      })
      .catch((error: any) => {
        dispath(AuthLoginFail(error));
      });
  };
};

const AuthLoginRequest = () => {
  return {
    type: ActionType.LOGIN_USER_REQUEST,
  };
};
const AuthLoginSuccess = (data: any) => {
  return {
    type: ActionType.LOGIN_USER_SUCCESS,
    payload: data,
  };
};
const AuthLoginFail = (error: any) => {
  return {
    type: ActionType.LOGIN_USER_FAIL,
    payload: error,
  };
};
