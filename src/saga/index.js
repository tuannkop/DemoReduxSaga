import {all, fork} from 'redux-saga/effects';
import * as Listenner from './Listener';

export default function* rootSaga() {
  yield all(
    [
      ...Object.values(Listenner),
    ].map(fork)
  );
}
