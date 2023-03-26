import * as types from "./types";
import { Action, JobState } from "../../../../global/dataTypes";

const initialState: JobState = {
  loading: false,
  job: {
    id: 1,
    tenCongViec: "",
    danhGia: 100,
    giaTien: 15,
    nguoiTao: 1,
    hinhAnh: "",
    moTa: "",
    maChiTietLoaiCongViec: 2,
    moTaNgan: "",
    saoCongViec: 1,
  },
  jobs: [
    {
      id: 1,
      tenCongViec: "",
      danhGia: 100,
      giaTien: 15,
      nguoiTao: 1,
      hinhAnh: "",
      moTa: "",
      maChiTietLoaiCongViec: 2,
      moTaNgan: "",
      saoCongViec: 1,
    },
  ],
  error: null,
};

const JobReducer = (state = initialState, action: Action): JobState => {
  switch (action.type) {
    case types.FETCH_JOBS_SUCCESS: {
      state.jobs = action.payload;
      return { ...state };
    }
    case types.FETCH_JOBS_FAIL: {
      state.error = action.payload;
      return { ...state };
    }
    case types.FETCH_JOB_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case types.FETCH_JOB_SUCCESS: {
      state.loading = false;
      state.job = action.payload;
      return { ...state };
    }
    case types.FETCH_JOB_FAIL: {
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default JobReducer;
