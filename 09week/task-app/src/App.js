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

  deleteTask=(index)=>{
    this.setState({
      tasks: [...this.state.tasks.filter(task => task !== this.state.tasks[index])]
    })
  }

  handleList=()=>{
    return this.state.tasks.map((task, index)=>{
      return (
      <p key={index}>
        {/* <button className='delete' onClick={this.deleteTask}>Done!</button> */}
        <button className='delete' onClick={(e) => this.deleteTask(index, e)}>Done!</button>
        {task}
      </p>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>tasky</h1>
          <h6>lets do some things!</h6>
        </header>
        <hr />
        <section>
          <input type='text' onChange={this.handleInput} value={this.state.inputVal}></input>
          <button className='add' onClick={this.handleClick}>Add Task</button>
        </section>
        <hr/>
        {this.handleList()}
      </div>
    );
  }
}

export default App;
