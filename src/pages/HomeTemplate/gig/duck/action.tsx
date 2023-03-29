import { Action } from "../../../../global/dataTypes";
import { simpleActionCreator } from "../../../../utils/actionUtils";
import api from "../../../../utils/apiUtils";
import * as types from "./types";

export const fetchGig: any = (id: number) => (dispatch: any) => {
  dispatch(fetchGigRequest());
  api
    .get(`cong-viec/lay-cong-viec-chi-tiet/${id}`)
    .then((result) => {
      dispatch(fetchGigSuccess(result.data.content[0]));
    })
    .catch((error) => {
      dispatch(fetchGigFail(error.response.data.content));
    });
};

const fetchGigRequest = (): Action => ({ type: types.FETCH_GIG_REQUEST });
const fetchGigSuccess = simpleActionCreator(types.FETCH_GIG_SUCCESS);
const fetchGigFail = simpleActionCreator(types.FETCH_GIG_FAIL);

export const fetchReviews: any = (id: number) => (dispatch: any) => {
  api
    .get(`binh-luan/lay-binh-luan-theo-cong-viec/${id}`)
    .then((result) => {
      dispatch(fetchReviewsSuccess(result.data.content));
    })
    .catch((error) => {
      dispatch(fetchReviewsFail(error.response.data.content));
    });
};

const fetchReviewsSuccess = simpleActionCreator(types.FETCH_REVIEWS_SUCCESS);
const fetchReviewsFail = simpleActionCreator(types.FETCH_REVIEWS_FAIL);
