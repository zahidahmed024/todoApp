import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist'
import appReducer from './reducers'

export const store = createStore(appReducer, applyMiddleware(reduxThunk))
export const persistor = persistStore(store)
