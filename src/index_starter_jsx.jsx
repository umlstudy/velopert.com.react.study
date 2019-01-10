import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider  } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import App from './middleware3/App';
import modules from './middleware3/modules';
// import promiseMiddleware from 'redux-promise-middleware';
import penderMiddleware from 'redux-pender';

// tslint:disable:no-console
export default function main() {
    /* 로그 미들웨어를 생성 할 때 설정을 커스터마이징 할 수 있습니다.
    https://github.com/evgenyrodionov/redux-logger#options
    */
    const logger = createLogger(); 
    // const customizedPromiseMiddleware = promiseMiddleware({
    //     promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'FAILURE']
    // });
    const store = createStore(modules, applyMiddleware(logger, ReduxThunk, penderMiddleware()))

    const appElement = document.getElementById('root');
    ReactDOM.render(
        <Provider store = {store}>
            <App />
        </Provider>,
        appElement
    );
}