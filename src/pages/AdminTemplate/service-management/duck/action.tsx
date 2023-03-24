import { simpleActionCreator } from "../../../../utils/actionUtils";
import api from "../../../../utils/apiUtils";
import * as types from "./types";

export const fetchServices = () => {
  return (dispatch: any) => {
    api
      .get("thue-cong-viec")
      .then((result) => dispatch(fetchServicesSuccess(result.data.content)))
      .catch((error) =>
        dispatch(fetchServicesFail(error.response.data.content))
      );
  };
};
const fetchServicesSuccess = simpleActionCreator(types.FETCH_SERVICES_SUCCESS);
const fetchServicesFail = simpleActionCreator(types.FETCH_SERVICES_FAIL);

export const fetchService: any = (id: number) => {
  return (dispatch: any) => {
    dispatch(fetchServiceRequest());
    api
      .get(`thue-cong-viec/${id}`)
      .then((result) => dispatch(fetchServiceSuccess(result.data.content)))
      .catch((error) => dispatch(fetchServiceFail(error)));
  };
};
const fetchServiceRequest = () => ({ type: types.FETCH_SERVICE_REQUEST });
const fetchServiceSuccess = simpleActionCreator(types.FETCH_SERVICE_SUCCESS);
const fetchServiceFail = simpleActionCreator(types.FETCH_SERVICE_FAIL);
