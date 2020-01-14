import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';

export default function generateReducers(history){
  return combineReducers({
    router: connectRouter(history),
  })
}
