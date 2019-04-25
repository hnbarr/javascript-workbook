import React, { Component } from 'react'

export default class Review extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: this.props.title,
       comment: this.props.comment,
       stars: this.props.stars
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

