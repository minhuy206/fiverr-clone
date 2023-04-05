import { Action, DetailJobTypesState } from "../../../../global/dataTypes";
import * as types from "./types";

const initialState: DetailJobTypesState = {
  detailJobTypes: null,
  error: null,
  loading: false,
};

const DetailJobTypesReducer = (
  state = initialState,
  action: Action
): DetailJobTypesState => {
  switch (action.type) {
    case types.FETCH_DETAIL_JOB_TYPE_REQUEST:
      state.loading = true;
      return { ...state };
    case types.FETCH_DETAIL_JOB_TYPE_SUCCESS:
      state.loading = false;
      state.detailJobTypes = action.payload;
      return { ...state };
    case types.FETCH_DETAIL_JOB_TYPE_FAIL:
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default DetailJobTypesReducer;
