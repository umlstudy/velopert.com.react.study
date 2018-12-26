import React from 'react';
import './TodoListTemplate.css';

// (props) => { ... } 를 해야 하는것을 
// ({form, children}) => { ... }
// 예제)
// <TodoListTemplate form={<div>이렇게 말이죠.</div>}>
//   <div>여기엔 children 자리구요.</div>
// </TodoListTemplate>
const TodoListTemplate = ({form, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        오늘 할 일
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;