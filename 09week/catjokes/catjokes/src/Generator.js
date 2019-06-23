import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';


export class Generator extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  
  componentDidMount() {
      fetch('https://uinames.com/api/')
      .then((response) => response.json())
        .then((data) => {
            console.log(data)
            this.setState({
              first: data.name,
              last: data.surname,
              pic: data.photo,
            })
        })
  }

  refresh() {
    window.location.reload();
  }
  
  render() {
    return (
      <div>
        <Jumbotron>
        <h1 className="display-3">Hello, {this.state.first} </h1>
        <p className="lead">My purpose is to say hello to each person! If you would like to greet another person, select the next button below!</p>
        <hr className="my-2" />
        <p>That's all we're going to do today is greet new people!</p>
        <p className="lead">
          <Button outline color="primary" onClick={()=> this.refresh()}>Greet Someone New!</Button>
        </p>
      </Jumbotron>
      </div>
    )
  }
}

export default Generator