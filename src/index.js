import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './Containers/App/App';
import authReducer from './Store/Reducers/authReducer';
import userReducer from './Store/Reducers/userReducer';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ authReducer, userReducer });

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();