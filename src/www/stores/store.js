import { reducer as registerForm } from '../components/registerForm/reducer';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();

let store = createStore(combineReducers({ registerForm }),
    applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;