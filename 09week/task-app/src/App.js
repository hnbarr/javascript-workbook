import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputVal: '',
      tasks: []
    }
  }
  
  handleInput=(e)=>{
    this.setState({
      inputVal: e.target.value
    })
  }

  handleClick=()=>{
    this.setState({
      tasks: [...this.state.tasks, this.state.inputVal],
      inputVal: ''
    })
  }

  handleList=()=>{
    return this.state.tasks.map((task, index)=>{
      return (
      <p key={index}>
        {task}
      </p>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Tasky</h1>
          <h6>lets do some things!</h6>
        </header>
        <input type='text' onChange={this.handleInput} value={this.state.inputVal}></input>
        <button onClick={this.handleClick}>Add Task</button>
        {this.handleList()}
      </div>
    );
  }
}

export default App;
