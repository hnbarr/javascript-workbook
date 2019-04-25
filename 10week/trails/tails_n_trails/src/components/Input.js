import React, { Component } from 'react'

export default class Input extends Component {
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
        <input id='zipField' type='text' onChange={this.handleInput} value={this.state.inputVal} placeholder='Enter zip code here!'></input>
        <button id='submitBtn' type='submit' onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

