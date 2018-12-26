import * as React from 'react';

class Counter extends React.Component {

    public state = {
        num: 0
    }

    public render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.num}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }

    private handleIncrease = () => {
        const { num } = this.state;
        this.setState({
            num: num + 1
        });
    }

    private handleDecrease = () => {
        const { num } = this.state;
        this.setState({
            num: num - 1
        });
    }
}

export default Counter;