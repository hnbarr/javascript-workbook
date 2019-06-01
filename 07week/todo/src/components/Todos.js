import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
 
  render() {
    return this.props.todos.map((todo) => (
        <h3> 
        <TodoItem key={todo.id} todo={todo} 
        markComplete={this.props.markComplete} 
        delTodo={this.props.delTodo} /> 
        </h3>
    ));
  }
}

//Prop Types
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;