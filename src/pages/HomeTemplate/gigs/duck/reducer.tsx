import { Action, GigsState } from "../../../../global/dataTypes";
import * as types from "./types";

const initialState: GigsState = {
  loading: false,
  gigs: null,
  error: null,
};

const GigsReducer = (state = initialState, action: Action): GigsState => {
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

export default GigsReducer;
