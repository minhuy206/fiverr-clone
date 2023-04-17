import { appendFile } from "fs";
import api from "./../../../../utils/apiUtils";

import * as ActionTypes from "./types";

export const actRegister = (data: any, naviget: any) => {
  return (dispath: any) => {
    dispath(ActRegisterRequest());
    api
      .post("auth/signup", data)
      .then((result) => {
        dispath(ActRegisterSuccess(result.data.content));
        localStorage.setItem("USER", JSON.stringify(result.data.content));
        naviget(-1, { replace: true });
      })
      .catch((error) => {
        dispath(ActRegisterFail(error));
      });
  };
};

const ActRegisterRequest = () => {
  return {
    type: ActionTypes.REGISTER_USER__REQUEST,
  };
};
const ActRegisterSuccess = (data: any) => {
  return {
    type: ActionTypes.REGISTER_USER__SUCCESS,
    payload: data,
  };
};
const ActRegisterFail = (error: any) => {
  return {
    type: ActionTypes.REGISTER_USER__FAIL,
    payload: error,
  };
};
