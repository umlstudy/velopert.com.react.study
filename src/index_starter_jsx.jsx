import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider  } from 'react-redux';
import App from './reducer/components/App';
import counterApp from './reducer/reducers';
import loggerMiddleware from './middleware/lib/loggerMiddleware';

// tslint:disable:no-console
export default function main() {

    const appElement = document.getElementById('root');
    
    
    // 미들웨어가 여러개인경우에는 파라미터로 여러개를 전달해주면 됩니다. 예: applyMiddleware(a,b,c)
    // 미들웨어의 순서는 여기서 전달한 파라미터의 순서대로 지정됩니다.
    //const store = createStore(counterApp);
    const store = createStore(counterApp, applyMiddleware(loggerMiddleware))


    // 렌더링 될 때 Redux 컴포넌트인 <Provider> 에 store 를 설정해주면 
    // 그 하위 컴포넌트들에 따로 parent-child 구조로 전달해주지 않아도 
    // connect 될 때 store에 접근 할 수 있게 해줍니다.
    ReactDOM.render(
        <Provider store = {store}>
            <App />
        </Provider>,
        appElement
    );

    // curry test
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAABB");

    let func = a => b => c => {
        return a + b + c;
    };

    let funca = func(3);
    let funcb = funca(7);
    let funcc = funcb(11);

    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAABB => " + funcc);

}


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import registerServiceWorker from './registerServiceWorker';

// /*
//  * Action
//  */
// const INCREMENT = "INCREMENT";

// function increase(diff) {
//     return {
//         type: INCREMENT,
//         addBy: diff
//     };
// }

// /*
//  * Reducer
//  */
// const initialState = {
//     value: 0
// };

// const counterReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case INCREMENT:
//             return Object.assign({}, state, {
//                 value: state.value + action.addBy
//             });
//         default:
//             return state;
//     }
// }

// /*
//  * Store
//  */
// const store = createStore(counterReducer);

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.onClick = this.onClick.bind(this);
//     }

//     render() {

//         let centerStyle = {
//             position: 'fixed',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             WebkitUserSelect: 'none',
//             MozUserSelect: 'none',
//             MsUserSelect:'none',
//             userSelect: 'none',
//             cursor: 'pointer'
//         };

//         return (
//             <div
//                 onClick={ this.onClick }
//                 style={ centerStyle }
//             >

//                 <h1> {this.props.store.getState().value} </h1>
//             </div>
//         )
//     }

//     onClick() {
//         this.props.store.dispatch(increase(1));
//     }
// }

// const render = () => {

//     const appElement = document.getElementById('root');
//     ReactDOM.render(
//         <App store={store}/>,
//         appElement
//     );
// };

// export default function main() {
//     store.subscribe(render);
//     render();
// }

// // export default function main() {
// //     ReactDOM.render(<Root />, document.getElementById('root'));
// //     registerServiceWorker();
// // }