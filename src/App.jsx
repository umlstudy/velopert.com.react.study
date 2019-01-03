import React, { Component } from 'react';
import UserList from './UserList';
import { List, Map } from 'immutable';

class App extends Component {
    id = 3;

    state = {
        data: Map({
            input: '',
            users: List([
                Map({
                    id: 1,
                    username: 'velopert'
                }),
                Map({
                    id: 2,
                    username: 'mjkim'
                })
            ])
        })
    }

    onChange = (e) => {
        const { value } = e.target;
        const { data } = this.state;

        this.setState({
            data: data.set('input', value)
        });
    }

    onButtonClick = () => {
        const { data } = this.state;

        this.setState({
            data: data.set('input', '')
                .update('users', users => users.push(Map({
                    id: this.id++,
                    username: data.get('input')
                })))
        })
    }

    render() {
        const { onChange, onButtonClick } = this;
        const { data } = this.state;
        const input = data.get('input');
        const users = data.get('users');

        return (
            <div>
                <div>
                    <input onChange={onChange} value={input} />
                    <button onClick={onButtonClick}>추가</button>
                </div>
                <h1>사용자 목록</h1>
                <div>
                    <UserList users={users} />
                </div>
            </div>
        );
    }
}

/* 불변함을 유지하면서 수정하기 #1
const { users } = this.state;
const nextUsers = [ ...users ]; // users 배열을 복사하고
nextUsers[1] = {
  ...users[index], // 기존의 객체 내용을 복사하고
  email: 'new_lopert@gmail.com' // 덮어 씌우고
};
// 이렇게 기존의 users 는 건들이지 않고
// 새로운 배열/객체를 만들어 setState
this.setState({
  users: nextUsers
});

*/
/* 불변함을 유지하면서 수정하기 #2
state = {
  where: {
    are: {
      you: {
        now: 'faded',
        away: true // 요놈을 바꾸고 싶다!
      },
      so: 'lost'
    },
    under: {
      the: true,
      sea: false
    }
  }
}

const { where } = this.state;
this.setState({
  where: {
    ...where,
    are: {
      ...where.are,
      you: {
        ...where.are.you,
        away: false
      }
    }
  }
});
*/


export default App;