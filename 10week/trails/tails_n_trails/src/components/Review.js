import React, { Component } from 'react'

export default class Review extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: 'lots of leaves',
       comment: 'I went there on a saturday and there were so many leaves, I lost my dog in some.',
       stars: 4.6
    }
  }
  
  render() {
    const {title, comment, stars} = this.state;

    return (
      <div id='review'>
        <div id='top'>
          <p>{title}</p>
          <b>
            <i className="far fa-star"></i>
            {stars}
          </b>
        </div>
        <div id='comment'>
          {comment}
        </div>
      </div>
    )
  }
}

