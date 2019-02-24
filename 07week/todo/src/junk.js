mport React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    input: "",
    list: []
  }

  keyHandler = (e) => { //if the key pressed is enter then run this function
    if(e.key === "Enter"){
      this.setState({
        list: [...this.state.list, this.state.input],
        input: ""
      })
      // console.log("working, yo")
    }
  }

  handleChange(e){
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Heyyyooooooo, things to do!</h1>
        <input className="input" 
        onKeyPress={e=> this.keyHandler(e)}
        onChange={(e => this.handleChange(e))} 
        value={this.state.input}
        placeholder="what do you need to do?" />
      
      <div>{this.state.list.map((value, index) => {
        return <h1 key={index}> {value} </h1>;})}
      </div>

      </div>

    );
  }
}

export default App;