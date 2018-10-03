import * as types from "./types";

export const callAPI = () => {
  return {
    type: types.CALL_API
  };
};

export const callAPISuccess = response => {
  return {
    type: types.CALL_API_SUCCESS,
    response
  };
};

export const callAPIFail = response => {
  return {
    type: types.CALL_API_FAIL,
    response
  };
};