import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk'
import auth from './Auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  auth,

})

const configureStore = () => {
  return createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk)),
  )
}

export default configureStore;
