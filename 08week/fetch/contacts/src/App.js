import React, { Component } from 'react';
import './App.css';
import  Header from './Header'
import Contacts from './Contacts'


class App extends Component {
  render() {
    return (
      <div className="container">
          <Header />
          <div className="contacts">
          <Contacts />
          </div>
      </div>
    );
  }
}

export default App;
