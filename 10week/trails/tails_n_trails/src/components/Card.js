import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: null,
       ratings: null,
       distance: null,
    }
  }
  
  render() {
    return (
      <div className='card'>
        <h5>Name of clicked result</h5>
            <p>ratings?</p>
            <p>distance?</p>
      </div>
    )
  }
}
