import React, { Component } from 'react'
import Review from './Review'
import Description from './Description'

export default class Results extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       reviews: [ //test, api will replace this 
        {title: 'great place', comment: 'blah blah blah blah blah blah ablah', stars: 5.0}, 
        {title: 'lots of leaves', comment: 'I went there on a saturday and there were so many leaves, I lost my dog in some.', stars:4.7}, 
        {title: 'need more benches', comment: 'blah blah blah blah blah blah ablah', stars: 3.6}
     ],
       isExpanded: true
    }
  }

  handleClick = () => {
    this.setState = ({
      isExpanded: !this.state.isExpanded
    })
  }
  //handle click to expand/close
  //add scroll to handle overflow in css
  
  render() {
    const {reviews, isExpanded} = this.state;
    if(!isExpanded){
      return (
        <div className='results'>
          <h5>Name of clicked result</h5>
              <Description />
        </div>
      )
    } else {
      return (
        <div className='results'>
          <h5>Name of clicked result</h5>
              <Description />
              {reviews.map((review, i)=> {
                  return(
                    <Review key={i} review={review} title={review.title} comment={review.comment} stars={review.stars}/>
                  )
              })}
        </div>
      )
    }
  }
}
