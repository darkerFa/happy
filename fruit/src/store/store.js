import {createStore,combineReducers,compose} from "redux"
import thunk from "redux-thunk"
import promiseThunk from "redux-promise"
import {applyMiddleware} from "redux" 

import tabbar from './Reducers/tabbar.js'
import cd from './Reducers/cdReducer.js'

const reducer = combineReducers({
    tabbar,
    cd
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk,promiseThunk)
  ));
// const store = createStore(reducer)
export default store 