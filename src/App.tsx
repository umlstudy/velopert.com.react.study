import * as React from 'react';
import './App.css';
import PhoneForm from './component/PhoneForm';
import PhoneInfoList from './component/PhoneInfoList';

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
    ,keyword : ''    
  }
  private id: number = 2

  public render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <p>
          <input
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <hr />
        <PhoneInfoList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }

  public handleChange = (e: any) => {
    this.setState({
      keyword: e.target.value,
    });
  }

  public handleCreate = (data: any) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  public handleRemove = (id: number) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  public handleUpdate = (id: number, data: any) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
          : info // 기존의 값을 그대로 유지
      )
    })
  }
}

export default App;
