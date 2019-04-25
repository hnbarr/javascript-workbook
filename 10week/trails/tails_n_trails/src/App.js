import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Card from './components/Card';
import Map from './components/Map';
// import SearchBox from './components/Search';

class App extends Component {
//need to do loading ternary to hide or display cardSection!

  render() {
    return (
      <div className="App">
        <section className="panel">
          <h1>Tails n' Trails</h1>
          <Input />
          {/* <SearchBox /> */}
          <div className='cardContainer'>
            {/* {can put ternary here.. api has loaded ? return Card : ''} */ }
          <Card />
          </div>
        </section>
        <div className='map'>
          <Map/>
        </div>
      </div>
    );
  }
}

export default App;
