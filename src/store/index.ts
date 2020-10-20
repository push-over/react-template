import { createStore, combineReducers, applyMiddleware, compose, Middleware, Reducer } from 'redux'
import reduxThunk from 'redux-thunk'
import { IAction, IStoreState } from './types'

import { reducer as jokeReducer } from '../pages/joke/store'

const reducers: Reducer<IStoreState, IAction<any>> = combineReducers<IStoreState>({
  joke: jokeReducer
})

const middleware: Middleware[] = [reduxThunk]

const composeStore = () => {
  const store = window.__REDUX_DEVTOOLS_EXTENSION__
    ? createStore(reducers, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__({})))
    : createStore(reducers, applyMiddleware(...middleware))
  return store
}

export type AppState = ReturnType<typeof reducers>

export default composeStore()
