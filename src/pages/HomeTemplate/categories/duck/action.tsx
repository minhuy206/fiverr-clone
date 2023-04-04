import { Action } from "../../../../global/dataTypes";
import { simpleActionCreator } from "../../../../utils/actionUtils";
import api from "../../../../utils/apiUtils";
import * as types from "./types";

export const fetchDetailJobType = (id: any) => (dispatch: any) => {
  dispatch(fetchDetailJobTypeRequest());
  api
    .get(`cong-viec/lay-chi-tiet-loai-cong-viec/${id}`)
    .then((result) => {
      dispatch(fetchDetailJobTypeSuccess(result.data.content));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchDetailJobTypeFail(error.response.data.content));
    });
};

const fetchDetailJobTypeRequest = (): Action => ({
  type: types.FETCH_DETAIL_JOB_TYPE_REQUEST,
});
const fetchDetailJobTypeSuccess = simpleActionCreator(
  types.FETCH_DETAIL_JOB_TYPE_SUCCESS
);
const fetchDetailJobTypeFail = simpleActionCreator(
  types.FETCH_DETAIL_JOB_TYPE_FAIL
);
