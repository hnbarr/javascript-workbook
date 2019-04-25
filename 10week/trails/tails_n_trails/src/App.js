import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Results from './components/Results';
import Map from './components/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="section">
          <h1>Tails n' Trails</h1>
          <Header />
          <Results />
        </section>
        <div className='map'>
          <Map/>
        </div>
      </div>
    );
  }
}

export default App;
