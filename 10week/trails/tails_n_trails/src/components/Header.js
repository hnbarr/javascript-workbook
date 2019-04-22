import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    inputVal: ' ',
    currentZip: null
    }
}
  handleInput=(e)=>{
    this.setState({
    inputVal: e.target.value
    })
  }


  handleSubmit = () => {
    //search api for zip code and then clear field
    //use this.state.currentZip for api search!
    this.setState({
      currentZip: this.state.inputVal, //moved the zip that was entered, into its own state.
      inputVal: ' '
    })
  }
  
  render() {
    return (
      <div>
        <input id='zipField' type='text' placeholder='Enter zip code here!' onChange={this.handleInput} value={this.state.inputVal}></input>
        <button id='submitBtn' type='submit' onClick={this.handleSubmit}>Submit</button>
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
