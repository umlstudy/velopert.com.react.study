import React, { Component } from 'react';
import UserList from './UserList';

class App extends Component {
  id = 3;

  state = {
    input: '',
    users: [
      {
        id: 1,
        username: 'velopert'
      },
      {
        id: 2,
        username: 'mjkim'
      }
    ]
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  onButtonClick = (e) => {
    this.setState(({ users, input }) => ({
      input: '',
      users: users.concat({
        id: this.id++,
        username: input
      })
    }))
  }

  render() {
    const { onChange, onButtonClick } = this;
    const { input, users } = this.state;

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