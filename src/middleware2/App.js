import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules';
import axios from 'axios';

// tslint:disable:no-console
class App extends Component {

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
             .then(response => console.log(response.data));
    }

    render() {
        const { CounterActions, num } = this.props;
        console.log(this.props)
        return (
            <div>
                <h1>aaa{num}bbbb</h1>
                <button onClick={CounterActions.incrementAsync}>+</button>
                <button onClick={CounterActions.decrementAsync}>-</button>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        num: state.counter
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch)
    })
)(App);