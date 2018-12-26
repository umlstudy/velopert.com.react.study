import * as React from 'react';
import './App.css';
import PhoneForm from './component/PhoneForm';

// tslint:disable:no-console
class App extends React.Component {

  public state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }
  private id: number = 2

  public render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        {information.forEach((item)=>{
          //
          JSON.stringify(item)
          ;
        })}
        {JSON.stringify(information)}
      </div>
    );
  }

  public handleCreate = (data: any) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
}

export default App;
