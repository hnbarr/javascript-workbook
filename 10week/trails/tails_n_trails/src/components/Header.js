import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    input: ''
    }
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


// &key=AIzaSyDF04sIWVc7h5s5WxqJwvA93RLPVsTftIM
// &placeid=ChIJLwPMoJm1RIYRetVp1EtGm10
// &type=park
// latlng=30.2729,-97.7443


//   initMap= () => {
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: 30.2672, lng: -97.7443},
//       zoom: 8
//     });
//   }
