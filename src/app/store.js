import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';

export default createStore(
    combineReducers({
        math: mathReducer, 
        user: userReducer
    }),
    {},
    applyMiddleware(createLogger())
);