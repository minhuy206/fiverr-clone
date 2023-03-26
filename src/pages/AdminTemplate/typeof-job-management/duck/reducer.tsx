import * as types from "./types";
import { Action, JobTypeState } from "../../../../global/dataTypes";

const initialState: JobTypeState = {
  loading: false,
  type: {
    id: 0,
    tenLoaiCongViec: "",
  },
  types: [
    {
      id: 0,
      tenLoaiCongViec: "",
    },
  ],
  error: null,
};

const TypeReducer = (state = initialState, action: Action): JobTypeState => {
  switch (action.type) {
    case types.FETCH_TYPES_SUCCESS: {
      state.types = action.payload;
      return { ...state };
    }
    case types.FETCH_TYPES_FAIL: {
      state.error = action.payload;
      return { ...state };
    }
    case types.FETCH_TYPE_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case types.FETCH_TYPE_SUCCESS: {
      state.loading = false;
      state.type = action.payload;
      return { ...state };
    }
    case types.FETCH_TYPE_FAIL: {
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default TypeReducer;
