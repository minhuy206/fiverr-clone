import { Action } from "../global/dataTypes";

export const simpleActionCreator =
  (type: string) =>
  (payload: any): Action => ({
    type,
    payload,
  });
