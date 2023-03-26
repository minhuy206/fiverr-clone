import { Action } from "../../../../global/dataTypes";
import { simpleActionCreator } from "../../../../utils/actionUtils";
import api from "../../../../utils/apiUtils";
import * as types from "./types";

export const fetchGigs: any = (tenCongViec: string) => (dispatch: any) => {
  dispatch(fetchGigsRequest());
  api
    .get(`cong-viec/lay-danh-sach-cong-viec-theo-ten/${tenCongViec}`)
    .then((result) => dispatch(fetchGigsSuccess(result.data.content)))
    .catch((error) => {
      dispatch(fetchGigsFail(error));
      console.log(error);
    });
};

const fetchGigsRequest = (): Action => ({ type: types.FETCH_GIGS_REQUEST });
const fetchGigsSuccess = simpleActionCreator(types.FETCH_GIGS_SUCCESS);
const fetchGigsFail = simpleActionCreator(types.FETCH_GIGS_FAIL);
