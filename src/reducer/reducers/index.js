import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';
import { combineReducers } from 'redux';

const counterInitialState = {
    value: 0,
    diff: 1
};

const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default:
            return state;
    }
};


const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

// reducer를 여러개로 분리하여 작성 할 땐, 서로 직접적인 관계가 없어야 합니다.
const counterApp = combineReducers({
    counter,
    extra
});

// 각기 다른 키를 주고 싶으면
// const counterApp = combineReducers({
//   a: counter,
//   b: extra
// });

// 같은 코드
// const counterApp = ( state = { }, action ) => {
//   return {
//       counter: counter(state.counter, action),
//       extra: extra(state.extra, action)
//   }
// }

export default counterApp;