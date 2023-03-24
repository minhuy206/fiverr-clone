import { simpleActionCreator } from "../../../../utils/actionUtils";
import api from "../../../../utils/apiUtils";
import * as types from "./types";

export const fetchJobs = () => {
  return (dispatch: any) => {
    api
      .get("cong-viec")
      .then((result) => dispatch(fetchJobsSuccess(result.data.content)))
      .catch((error) => dispatch(fetchJobsFail(error.response.data.content)));
  };
};
const fetchJobsSuccess = simpleActionCreator(types.FETCH_JOBS_SUCCESS);
const fetchJobsFail = simpleActionCreator(types.FETCH_JOBS_FAIL);

export const fetchJob: any = (id: number) => {
  return (dispatch: any) => {
    dispatch(fetchJobRequest());
    api
      .get(`cong-viec/${id}`)
      .then((result) => dispatch(fetchJobSuccess(result.data.content)))
      .catch((error) => dispatch(fetchJobFail(error)));
  };
};
const fetchJobRequest = () => ({ type: types.FETCH_JOB_REQUEST });
const fetchJobSuccess = simpleActionCreator(types.FETCH_JOB_SUCCESS);
const fetchJobFail = simpleActionCreator(types.FETCH_JOB_SUCCESS);
