import {  fork, call } from 'redux-saga/effects';
import { fetchOffers } from './services'


function* fetchOffersSaga() {
    try {
     const value = yield call(fetchOffers)
     console.log(value)
    }catch (e) {
      console.log(e)
    }
}

export function* offersRootSaga() {
  yield fork(fetchOffersSaga);
}
