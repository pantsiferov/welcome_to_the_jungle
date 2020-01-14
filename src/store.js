import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga';
import * as History from 'history'
import generateReducers from './ducks/root-reducer'
import { rootSaga } from './ducks/root-saga'

export const history = History.createBrowserHistory()

const initialState = {}
const enhancers = []
const saga = createSagaMiddleware();




if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(saga, routerMiddleware(history)),
  ...enhancers
)



export default createStore(
  generateReducers(history),
  initialState,
  composedEnhancers
)

saga.run(rootSaga);
