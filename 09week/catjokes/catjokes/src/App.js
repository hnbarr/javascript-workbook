import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Generator from './Generator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Generator />
      </div>
    );
  }
}

export default App;