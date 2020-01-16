import { createReducer, createAction } from 'redux-act';

/*
  Initial state
*/
const initialState = {};

/*
  Actions
*/
export const fetchOffersRequest = createAction('OFFERS/FETCH_OFFERS_REQUEST');
export const fetchOffersSuccess = createAction('@OFFERS/FETCH_OFFERS_SUCCESS');
export const fetchOffersFail = createAction('OFFERS/FETCH_OFFERS_FAIL');

/*
  Slice reducers
*/

const handleFolderRequestSuccess = (state, data) => ({
  ...state,
  ...data,
});


/*
  Main reducer
*/
export default createReducer((on) => {
  on(fetchOffersSuccess, handleFolderRequestSuccess);
}, initialState);
