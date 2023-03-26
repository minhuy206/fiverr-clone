import { Action } from "../../../../global/dataTypes";
import { simpleActionCreator } from "../../../../utils/actionUtils";
import api from "../../../../utils/apiUtils";
import * as types from "./types";

export const fetchTypes = () => {
  return (dispatch: any) => {
    api
      .get("loai-cong-viec")
      .then((result) => dispatch(fetchTypesSuccess(result.data.content)))
      .catch((error) => dispatch(fetchTypesFail(error.response.data.content)));
  };
};
const fetchTypesSuccess = simpleActionCreator(types.FETCH_TYPES_SUCCESS);
const fetchTypesFail = simpleActionCreator(types.FETCH_TYPES_FAIL);

export const fetchType: any = (id: number) => {
  return (dispatch: any) => {
    dispatch(fetchTypeRequest());
    api
      .get(`loai-cong-viec/${id}`)
      .then((result) => dispatch(fetchTypeSuccess(result.data.content)))
      .catch((error) => dispatch(fetchTypeFail(error)));
  };
};
const fetchTypeRequest = (): Action => ({ type: types.FETCH_TYPE_REQUEST });
const fetchTypeSuccess = simpleActionCreator(types.FETCH_TYPE_SUCCESS);
const fetchTypeFail = simpleActionCreator(types.FETCH_TYPE_SUCCESS);
