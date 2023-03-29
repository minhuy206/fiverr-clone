import { Action, GigState } from "../../../../global/dataTypes";
import * as types from "./types";

const initialState: GigState = {
  loading: false,
  gig: null,
  reviews: null,
  error: null,
};

const GigReducer = (state = initialState, action: Action): GigState => {
  switch (action.type) {
    case types.FETCH_GIG_REQUEST:
      state.loading = true;
      return { ...state };
    case types.FETCH_GIG_SUCCESS:
      state.loading = false;
      state.gig = action.payload;
      return { ...state };
    case types.FETCH_GIG_FAIL:
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    case types.FETCH_REVIEWS_SUCCESS:
      state.reviews = action.payload;
      return { ...state };
    case types.FETCH_REVIEWS_FAIL:
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default GigReducer;
