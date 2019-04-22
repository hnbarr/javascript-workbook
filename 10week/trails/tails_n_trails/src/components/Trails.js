import React, { Component } from 'react'

export default class Trails extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    input: ''
    }
  }

  componentDidMount = () => {
    fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?latlng=30.2729,-97.7443&radius=10&key=AIzaSyDF04sIWVc7h5s5WxqJwvA93RLPVsTftIM')
    .then((res)=>res.json())
    .then((data)=> {
        console.log(data)
    })
  }
  
  render() {
    return (
      <div>
        <input id='zipField' type='text' placeholder='Enter zip code here!'></input>
        <button id='submitBtn' type='submit'>Submit</button>
      </div>
    )
  }
}


// AIzaSyDF04sIWVc7h5s5WxqJwvA93RLPVsTftIM
// &placeid=ChIJLwPMoJm1RIYRetVp1EtGm10
// &type=park