import { AuthState } from "../../../../global/dataTypes";
import * as ActionTypes from "./type";
const initalState: AuthState = {
  loading: false,
  data: null,
  error: null,
};

const AuthLoginUserReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionTypes.LOGIN_USER_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionTypes.LOGIN_USER_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default AuthLoginUserReducer;
