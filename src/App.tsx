import * as React from 'react';
import './App.css';

import Counter from './Counter';
import LifeCycle from './LifeCycle';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Counter />
        <LifeCycle />
      </div>
    );
  }
}

export default App;
