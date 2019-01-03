import * as React from 'react';
import './App.css';
import Form from './component/Form';
import TodoItemList from './component/TodoItemList';
import TodoListTemplate from './component/TodoListTemplate';

// tslint:disable:no-console
class App extends React.Component {

  public state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: true },
      { id: 2, text: ' 리액트 소개', checked: false }
    ]
  }

  private id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정

  public render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={<Form
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
      />}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }

  private handleChange = (e: any) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  private handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        checked: false,
        id: this.id++,
        text: input
      })
    });
  }

  private handleKeyPress = (e: any) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  private handleToggle = (id: number) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    // const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    // nextTodos[index] = {
    //   ...selected,
    //   checked: !selected.checked
    // };
    // 또는
    nextTodos[index].checked = !nextTodos[index].checked;

    this.setState({
      todos: nextTodos
    });
  }

  private handleRemove = (id: any) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

}

export default App;
