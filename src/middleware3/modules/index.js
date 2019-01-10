import { combineReducers } from 'redux';
import counter from './counter';
import post from './post';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    counter:counter,
    post:post,
    pender: penderReducer
} );