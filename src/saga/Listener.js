import {
  takeLatest, put,
} from 'redux-saga/effects';
import * as types from '../actions/types';
import { GET } from "./api";

function* callAPI(action) {
  try {
    const response = yield GET("https://jsonplaceholder.typicode.com/posts");
    if (response) {
      const delay = (ms) => new Promise(res => setTimeout(res, ms))
      yield delay(1000)
      yield put({type: types.CALL_API_SUCCESS, response: response});
    } else {
      yield put({type: types.CALL_API_FAIL, response: response});
    }
  } catch (e) {
    console.log(e);
    yield put({type: types.CALL_API_FAIL});
  }
}
export function* watchDoCallAPI() {
  yield takeLatest(types.CALL_API, callAPI);
}
