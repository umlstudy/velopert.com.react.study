import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            id: 0,
            name: '이름',
            phone: '010-0000-0000'
        }
    }

    render() {
        const style = {
            border: '1px solid black',
            margin: '8px',
            padding: '8px'
        };

        const {
            name, phone, id
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
            </div>
        );
    }
}

export default PhoneInfo;