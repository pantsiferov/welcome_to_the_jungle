import { call, put, fork } from 'redux-saga/effects';
import { fetchOffers } from './services';
import { fetchOffersSuccess } from './reducer';
import { mapOffersToState } from './mappers';


function* fetchOffersSaga() {
  try {
    const data = yield call(fetchOffers);
    yield put(fetchOffersSuccess(mapOffersToState(data)));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export function* offersRootSaga() {
  // TODO in production it better use with takeEvery and action
  // yield takeEvery(fetchOffersRequest, fetchOffersSaga);
  yield fork(fetchOffersSaga);
}
