import React, { Component } from 'react'
import Card from './Card'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    
    this.state = ({
        contacts: [],
        isLoaded: false
    })
  }
    
  componentDidMount(){
    fetch('https://randomuser.me/api?results=25')
      .then((res)=> res.json())
      .then((data)=>{
        // console.log(data.results)
        this.setState({
          contacts: data,
          isLoaded: true,
          
        })
        // console.log(this.state.contacts)
      })
    }

  render() {

    if(!this.state.isLoaded){
        return(
            <h2>Loading ...</h2>
        )
    } else {
        console.log(this.state.contacts.results)
        return (
        <div>
            <ul>
                {this.state.contacts.results.map((contact, i)=>{
                    return (
                      <div key={i}>
                        <Card contact={contact} />
                      </div>
                    )
                })}  
            </ul>
        </div>
        )
     }
  }
}
