import * as ActionType from "./type";
import { AuthState } from "../../../../global/dataTypes";
const initalState: AuthState = {
  loading: false,
  data: null,
  error: null,
};

const ActDetailUserReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case ActionType.DETAIL_USER_HOME_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.DETAIL_USER_HOME_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.DETAIL_USER_HOME_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default ActDetailUserReducer;
