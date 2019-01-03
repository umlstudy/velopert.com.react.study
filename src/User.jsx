import React, { Component } from 'react';

// tslint:disable:no-console
class User extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.user !== nextProps.user;
  }
  render() {
    const { username } = this.props.user.toJS();
    console.log('%s가 렌더링 되고있어요!!!', username);

    return (
      <div>
        {username}
      </div>
    );
  }
}

export default User;