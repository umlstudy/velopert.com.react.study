import * as React from 'react';

// tslint:disable:no-console
class LifeCycle extends React.Component {
    state = {
        error: false,
        num: 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 5 의 배수라면 리렌더링 하지 않음
        console.log('shouldComponentUpdate');
        if (nextState.num % 5 === 0) {
            return false;
        }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }


    handleIncrease = () => {
        const { num } = this.state;
        this.setState({
            num: num + 1
        });
    }

    handleDecrease = () => {
        this.setState(
            ({ num }) => ({
                num: num - 1
            })
        );
    }

    render() {
        console.log('render');
        // if (this.state.error) {
        //     return (<h1>에러발생!</h1>);
        // } 
        return (
            <div>
                <h1>라이프사이클카운터</h1>
                <div>값: {this.state.num}</div>
                { this.state.num === 4 && <Problematic /> }
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }

}

const Problematic = () => {
    throw (new Error('버그가 나타났다!')); // componentDidCatch 호출됨!!!
    return (
        <div>

        </div>
    );
};

export default LifeCycle;