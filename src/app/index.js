import React from "react";

import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';

import App from './components/App';

const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
        state = {
            ...state,
            result: state.result - action.payload,
            lastValues: [...state.lastValues, action.payload]
        };
            break;
        default:
            break;
    }
    return state;
};

const userReducer = (state = {
    name: 'Zhao',
    age: 34
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
        state = {
            ...state,
            age: action.payload
        };
            break;
        default:
            break;
    }
    return state;
};

const store = createStore(
    combineReducers({
        math: mathReducer, 
        user: userReducer
    }),
    {},
    applyMiddleware(createLogger())
);

store.subscribe(() => {
    // console.log('Store updated!', store.getState());
});

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    window.document.getElementById('app'));