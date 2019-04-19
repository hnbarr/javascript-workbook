import React, { Component } from 'react'

export default class Beer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         beers: [],
         isLoaded: false
      }
    }
    
  
    componentDidMount(){
      fetch('https://api.punkapi.com/v2/beers/')
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
                beers: data,
                isLoaded: true,
            })
        })
  }

// show how many times clicked on buttons

  render() {
    if(!this.state.isLoaded){
        console.log(this.state.beers)
        return <h1>Loading...</h1>
    }else {
      return (
        <div className='cardSection'>
          <h1>Beer-topia!</h1>
          <div className='section'>
            {this.state.beers.map((beer)=>{
              return (
                <div className='beerCard' key={beer.id}>
                {beer.name}
                <hr/>
                {beer.tagline}
                <hr/>
                <div className='buttons'> 
                  <button className='shareBtn'><i className="fas fa-share-alt fa-2x"></i></button>
                  <button className='loveBtn'><i className="far fa-heart fa-2x"></i></button></div>
                </div>
              )
            })}
          </div>        
        </div>
      )
    }
  }
}
