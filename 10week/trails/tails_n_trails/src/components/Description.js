import React, { Component } from 'react'

export default class Description extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text: this.props.description
      }
    }
    
  render() {
    const {text} = this.state;
    return (
      <div id='describe'>
        <p>
          {text}
        </p>
      </div>
    )
  }
}
