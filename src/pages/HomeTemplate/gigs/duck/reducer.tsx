import { Action, GigState } from "../../../../global/dataTypes";
import * as types from "./types";

const initialState: GigState = {
  loading: false,
  gigs: null,
  error: null,
};

const GigReducer = (state = initialState, action: Action): GigState => {
  switch (action.type) {
    case types.FETCH_GIGS_REQUEST:
      state.loading = true;
      return { ...state };
    case types.FETCH_GIGS_SUCCESS:
      state.loading = false;
      state.gigs = action.payload;
      return { ...state };
    case types.FETCH_GIGS_FAIL:
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default GigReducer;
