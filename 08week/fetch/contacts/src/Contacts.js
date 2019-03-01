import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export class Contacts extends Component {
  constructor(props){
      super(props)
      this.state = {

      }
  }

  componentDidMount() {
    fetch('https://uinames.com/api/?ext')
    .then((response)=> response.json())
            .then((data) => {
                console.log(data)
                this.setState({
                first: data.name,
                last: data.surname,
                num: data.phone,
                bday: data.birthday.mdy,
                // age: data.age,
                pic: data.photo,
                email: data.email
                })
      })
  }

  refresh () {
    window.location.reload();
    } 

  render() {
    return (
      <div>
      <Card className="card">
        <CardImg className="bioPic" src={this.state.pic} alt="Card image cap" />
        <CardBody>
          <CardTitle> <h3> {this.state.first} </h3></CardTitle>
          <CardSubtitle> <h4> {this.state.last} </h4> </CardSubtitle>
        <CardText>{this.state.num}</CardText>
        <CardText>{this.state.email}</CardText>
        <div>
            <Button outline color="secondary">Edit</Button>{' '}
            <Button outline color="success">Call</Button>{' '}
            <Button outline color="info">Text</Button>{' '}
            <Button outline color="warning">Email</Button>{' '}
        </div >
        <hr />
        <CardText>Birthday: {this.state.bday}</CardText>
        <hr />
        <div>
            <Button outline color="primary" onClick={() => this.refresh()}>Next Contact</Button>{' '}
            <Button outline color="danger">Delete Contact</Button>
        </div>
        </CardBody>
      </Card>      
      </div>
    )
  }
}

export default Contacts
