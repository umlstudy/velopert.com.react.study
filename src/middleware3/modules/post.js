import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import axios from 'axios';

function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

const GET_POST = 'GET_POST';
/* redux-pender 의 액션 구조는 Flux standard action(https://github.com/acdlite/flux-standard-action) 
   을 따르기 때문에, createAction 으로 액션을 생성 할 수 있습니다. 두번째로 들어가는 파라미터는 프로미스를 반환하는
   함수여야 합니다.
*/
export const getPost = createAction(GET_POST, getPostAPI);

const initialState = {
    // 요청이 진행중인지, 에러가 났는지의 여부는 더 이상 
    // 직접 관리 할 필요가 없어집니다. penderReducer 가 담당하기 때문이죠
    data: {
        title: '',
        body: ''
    }
}

export default handleActions({
    ...pender({
        type: GET_POST, 
        // type 이 주어지면, 이 type 에 접미사를 붙인 액션핸들러들이 담긴 객체를 생성합니다.
        /*
            요청중 / 실패 했을 때 추가적으로 해야 할 작업이 있다면 이렇게 onPending 
                과 onFailure 를 추가해주면됩니다.
            onPending: (state, action) => state,
            onFailure: (state, action) => state
        */
        onSuccess: (state, action) => { 
            // 성공했을때 해야 할 작업이 따로 없으면 이 함수 또한 생략해도 됩니다.
            const { title, body } = action.payload.data;
            return {
                data: {
                    title, 
                    body
                }
            }
        }
        // 함수가 생략됐을때 기본 값으론 (state, action) => state 가 설정됩니다 (state 를 그대로 반환한다는 것이죠)
    })
}, initialState);

// const GET_POST_PENDING = 'GET_POST_PENDING';
// const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
// const GET_POST_FAILURE = 'GET_POST_FAILURE';

// const GET_POST = 'GET_POST';
// export const getPost = (postId) => ({
//     type: GET_POST,
//     payload: getPostAPI(postId)
// })

// export const getPost = (postId) => dispatch => {
//     // 먼저, 요청이 시작했다는것을 알립니다
//     dispatch({type: GET_POST_PENDING});

//     // 요청을 시작합니다
//     // 여기서 만든 promise 를 return 해줘야, 나중에 컴포넌트에서 호출 할 때 getPost().then(...) 을 할 수 있습니다
//     return getPostAPI(postId).then(
//         (response) => {
//             // 요청이 성공했을경우, 서버 응답내용을 payload 로 설정하여 GET_POST_SUCCESS 액션을 디스패치합니다.
//             dispatch({
//                 type: GET_POST_SUCCESS,
//                 payload: response
//             })
//         }
//     ).catch(error => {
//         // 에러가 발생했을 경우, 에로 내용을 payload 로 설정하여 GET_POST_FAILURE 액션을 디스패치합니다.
//         dispatch({
//             type: GET_POST_FAILURE,
//             payload: error
//         });
//     })

// }

// const initialState = {
//     pending: false,
//     error: false,
//     data: {
//         title: '',
//         body: ''
//     }
// }

// export default handleActions({
//     [GET_POST_PENDING]: (state, action) => {
//         return {
//             ...state,
//             pending: true,
//             error: false
//         };
//     },
//     [GET_POST_SUCCESS]: (state, action) => {
//         const { title, body } = action.payload.data;

//         return {
//             ...state,
//             pending: false,
//             data: {
//                 title, body
//             }
//         };
//     },
//     [GET_POST_FAILURE]: (state, action) => {
//         return {
//             ...state,
//             pending: false,
//             error: true
//         }
//     }
// }, initialState);