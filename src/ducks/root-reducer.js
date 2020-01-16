import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import offersReducer from './offers/reducer';

export default function generateReducers(history) {
  return combineReducers({
    offers: offersReducer,
    router: connectRouter(history),
  });
}
