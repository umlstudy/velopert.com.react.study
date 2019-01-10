import { handleActions, createAction } from 'redux-actions';
// tslint:disable:no-console
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);


export const incrementAsync = () => dispatch => {
    // 1초 뒤 액션 디스패치
    setTimeout(
        () => { dispatch(increment()) },
        1000
    );
}

export const decrementAsync = () => dispatch => {
    // 1초 뒤 액션 디스패치
    setTimeout(
        () => { dispatch(decrement()) },
        1000
    );
}

export default handleActions({
    [INCREMENT]: (state, action) => { return {counter:state.counter + 1}; },
    [DECREMENT]: (state, action) => { return {counter:state.counter - 1}; }
}, {counter:0});