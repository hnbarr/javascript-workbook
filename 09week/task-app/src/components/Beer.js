import React, { Component } from 'react'
import Card from './Card'

export default class Beer extends Component {
    constructor(props) {
      super(props)

      this.state = {
        beers: [],
        isLoaded: false,
        count: 0,
        // index:
      }
    }
  
    componentDidMount(){
      fetch('https://api.punkapi.com/v2/beers/')
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            this.setState({
                beers: data,
                isLoaded: true
            })
        })
    }
    
    // show how many times clicked on buttons

    render() {
      if(!this.state.isLoaded){
        return <h1>Loading...</h1>
      }else {
        return (
        <div className='cardSection'>
          <h1>Beer-topia!</h1>
          <div className='section'>
            {this.state.beers.map((beer)=>{ //my mapping function and return
              return (
                <Card beer={beer} key={beer.id}/>
              )
            })}
          </div>        
        </div>
      )
    }
  }
}


// onClick={(key) => this.handleClick(key)}