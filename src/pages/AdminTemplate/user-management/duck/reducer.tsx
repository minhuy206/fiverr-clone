import * as types from "./types";
import { AppState, Action, User } from "../../../../global/dataTypes";

const initialState: AppState<User> = {
  loading: false,
  user: {
    id: 0,
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    role: "",
    skill: [],
    certification: [],
    bookingJob: [],
  },
  users: [
    {
      id: 0,
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "",
      skill: [],
      certification: [],
      bookingJob: [],
    },
  ],
  error: null,
};

const UserReducer = (state = initialState, action: Action): AppState<User> => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS: {
      state.users = action.payload;
      return { ...state };
    }
    case types.FETCH_USERS_FAIL: {
      state.error = action.payload;
      return { ...state };
    }
    case types.FETCH_USER_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case types.FETCH_USER_SUCCESS: {
      state.loading = false;
      state.user = action.payload;
      return { ...state };
    }
    case types.FETCH_USER_FAIL: {
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default UserReducer;
