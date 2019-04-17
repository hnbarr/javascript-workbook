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
    return this.state.tasks.map((task, key)=>{
      return (
      <p key={task.toString()}>
        {/* {console.log(key, task.toString())} */}
        <button className='delete' onClick={(e) => this.deleteTask(key, e)}><i className="fas fa-times fa-2x"></i></button>
        {task}
      </p>
      )
    })
  }

  deleteTask=(key)=>{
    this.setState({
      tasks: [...this.state.tasks.filter(task => task !== this.state.tasks[key])]
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>tasky</h1>
          <h4>lets do some things!</h4>
        </header>
        <hr />
        <section>
          <input type='text' onChange={this.handleInput} value={this.state.inputVal} placeholder='what do you need to do?'></input>
          <button className='add' onClick={(e) => this.handleClick(e)}>Add Task</button>
        </section>
        <hr/>
        {this.handleList()}
      </div>
    );
  }
}

export default App;
