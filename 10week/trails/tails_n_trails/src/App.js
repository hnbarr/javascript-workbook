import React, { Component } from 'react';
import './App.css';
import Trails from './components/Trails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="section">
          <h1>Tails n' Trails</h1>
          <Trails/>
        </section>
      </div>
    );
  }
}

export default App;
