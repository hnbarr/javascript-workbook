import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    handleClick = () => {
        this.setState({
        count: this.state.count + 1
        })
      }
    
  render() {
    const {name, tagline, description, id} = this.props.beer;
    return (
    <div className='beerCard' key={id}>
        <h3>{name}</h3>
        <h5>{tagline}</h5>
        <hr/>
        <p>{description}</p>
        <hr/>
        {/* <button className='shareBtn'><i className="fas fa-share-alt fa-2x"></i></button> */}
        <button className='loveBtn' key={id} onClick={this.handleClick}>
          <i className="far fa-heart fa-2x"></i>
          {this.state.count}
        </button>
    </div>
    )
  }
}
