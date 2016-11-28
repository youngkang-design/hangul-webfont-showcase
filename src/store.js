import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const ignoreMiddleware = store => next => action => {
  // if (action.isAction) next(action)
  next(action)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
      ignoreMiddleware
    )
  )
)

sagaMiddleware.run(rootSaga)
