import * as types from "./types";
import { Action, ServiceState } from "../../../../global/dataTypes";

const initialState: ServiceState = {
  loading: false,
  service: {
    id: 0,
    maCongViec: 0,
    maNguoiThue: 0,
    ngayThue: "",
    hoanThanh: true,
  },
  services: [
    {
      id: 0,
      maCongViec: 0,
      maNguoiThue: 0,
      ngayThue: "",
      hoanThanh: true,
    },
  ],
  error: null,
};

const ServiceReducer = (state = initialState, action: Action): ServiceState => {
  switch (action.type) {
    case types.FETCH_SERVICES_SUCCESS: {
      state.services = action.payload;
      return { ...state };
    }
    case types.FETCH_SERVICES_FAIL: {
      state.error = action.payload;
      return { ...state };
    }
    case types.FETCH_SERVICE_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case types.FETCH_SERVICE_SUCCESS: {
      state.loading = false;
      state.service = action.payload;
      return { ...state };
    }
    case types.FETCH_SERVICE_FAIL: {
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default ServiceReducer;
