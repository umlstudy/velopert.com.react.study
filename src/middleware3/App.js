import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';
import * as postActions from './modules/post';

// tslint:disable:no-console
class App extends Component {

    componentDidMount() {
        // 컴포넌트가 처음 마운트 될 때 현재 number 를 postId 로 사용하여 포스트 내용을 불러옵니다.
        const { num, PostActions } = this.props;
        // PostActions.getPost(num);
        this.getPost(num);
    }

    // async 와 await 이용
    getPost = async (postId) => {
        const { PostActions } = this.props;
        try {
            await PostActions.getPost(postId);
            console.log('요청이 완료 된 다음에 실행됨')
        } catch(e) {
            console.log('에러가 발생!');
        }
        //or
        // PostActions.getPost(postId).then(
        //     () => {
        //         console.log('요청이 완료 된 다음이 실행 됨');
        //     }
        // ).catch((e) => {
        //     console.log('에러가 발생!');
        // })
    }

    componentWillReceiveProps(nextProps) {
        const { PostActions } = this.props;

        // 현재 number 와 새로 받을 number 가 다를 경우에 요청을 시도합니다.
        if(this.props.num !== nextProps.num) {
            PostActions.getPost(nextProps.num)
        }
    }

    render() {
        const { CounterActions, num, post, error, loading } = this.props;
        console.log("render app");
        console.log(num);
        console.log(post);
        console.log(error);
        console.log(loading);
        
        return (
            <div>
                <p>{num}</p>
                <button onClick={CounterActions.increment}>+</button>
                <button onClick={CounterActions.decrement}>-</button>
                { loading && <h2>로딩중...</h2>}
                { error 
                    ? <h1>에러발생!</h1> 
                    : (
                        <div>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    )}
            </div>
        );
    }
}

export default connect(
    (state) => {
        console.log("connect-----state");
        console.log(state);
        console.log("connect-----state.end");
        let key = 'GET_POST';
        let loading = state.pender.pending[key];
        let error = state.pender.failure[key];
        // let loading = false;
        // let error = null;
        return {
        num: state.counter.counter,
        post: state.post.data,
        loading: loading,
        error: error
    };},
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);