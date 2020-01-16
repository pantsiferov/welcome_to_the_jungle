import { all, fork } from 'redux-saga/effects';
import { offersRootSaga } from './offers/sagas';


export function* rootSaga() {
  yield all([
    fork(offersRootSaga),
  ]);
}
