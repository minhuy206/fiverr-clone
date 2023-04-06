import { combineReducers } from "redux";
import UserReducer from "../pages/AdminTemplate/user-management/duck/reducer";
import JobReducer from "../pages/AdminTemplate/job-management/duck/reducer";
import TypeReducer from "../pages/AdminTemplate/typeof-job-management/duck/reducer";
import ServiceReducer from "../pages/AdminTemplate/service-management/duck/reducer";
import GigReducer from "../pages/HomeTemplate/gigs/duck/reducer";
const rootReducer = combineReducers({
  UserReducer,
  JobReducer,
  TypeReducer,
  ServiceReducer,
  GigReducer,
});

export default rootReducer;
