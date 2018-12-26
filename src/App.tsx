import * as React from 'react';
import './App.css';
import PhoneForm from './component/PhoneForm';

// tslint:disable:no-console
class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <PhoneForm
          onCreate={this.handleCreate}
        />
      </div>
    );
  }

  private handleCreate = (data: any) => {
    console.log('App.handleCreate called');
    console.log(data);
  };
}

export default App;
