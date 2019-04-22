import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="section">
          <h1>Tails n' Trails</h1>
          <Header />
          <Card />
        </section>
      </div>
    );
  }
}

export default App;
