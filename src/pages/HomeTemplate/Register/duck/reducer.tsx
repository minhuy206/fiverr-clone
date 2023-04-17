import { AuthState } from "../../../../global/dataTypes";
import * as ActionTypes from "./types";
const initalState: AuthState = {
  loading: false,
  data: null,
  error: null,
};

const ActRegisterReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case ActionTypes.REGISTER_USER__REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionTypes.REGISTER_USER__SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionTypes.REGISTER_USER__FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default ActRegisterReducer;
