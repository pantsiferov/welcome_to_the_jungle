import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchOffers } from './services';
import { fetchOffersRequest, fetchOffersSuccess } from './reducer';
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
  yield takeEvery(fetchOffersRequest, fetchOffersSaga);
}
