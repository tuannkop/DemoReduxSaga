import * as types from '../actions/types';

const INITIAL = {
  success: null,
  fail: null,
  loading: false,
};


export default (state = INITIAL, action) => {
  switch (action.type) {
    case types.CALL_API:
      return {
        loading: true,
      };
    case types.CALL_API_SUCCESS:
      let dataSuccess = action.response;
      return {
        success: dataSuccess,
        error: null,
        loading: false
      };
    case types.CALL_API_SUCCESS:
      let dataError = action.response;
      return {
        error: dataError,
        success: null,
        loading: false
      };
    default:
      return state;
  }
};
