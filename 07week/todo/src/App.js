import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "take out the trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "get groceries",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "dinner with wife",
        completed: false
      }
    ]
  }

  //toggle complete/not complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

// delete todo
delTodo = (id) => {
  this.setState({
    todos: [...this.state.todos.filter(todo => todo.id !== id)]})
}

// add todo
addTodo = (title) => {
  const newTodo = { 
    id: uuid.v4(),
    title,
    completed: false 
  }
  this.setState({todos: [...this.state.todos, newTodo]});
}

  render() {
    return (
      <div className="App">
        <div className='container'>
          <h1>To Do List</h1>
          < AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} 
            markComplete={this.markComplete} delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
