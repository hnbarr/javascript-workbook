import React, { Component } from 'react'
import Review from './Review'
import Description from './Description'

export default class Card extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      //test data, api will replace these fields! Reminder, make sure to only save the 3 most recent reviews.
       name: 'Name of Clicked Result',
       description: 'Example of a description that this park or trail has on google, which will be pulled from the api!',
       reviews: [ 
        {title: 'Great place!!!', comment: 'Come here all the time, very spacious and we love it!', stars: 5}, 
        {title: 'Lots of leaves.', comment: 'I went there on a saturday and there were so many leaves, I lost my dog in some.', stars:2}, 
        {title: 'Needs more benches.', comment: 'I felt this place is nice, although it would be benefical to add more benches for all the community.', stars: 4}
       ],
    }
  }
  //add scroll to handle overflow in css, if necessary
  
  render() {
    const {reviews, name, description} = this.state;
      return (
        <div className='card'>
          <h5>{name}</h5>
              <Description description={description}/>
              {reviews.map((review, i)=> {
                  return(
                    <Review key={i} review={review} title={review.title} comment={review.comment} stars={review.stars}/>
                  )
              })}
        </div>
      )
    }
  }