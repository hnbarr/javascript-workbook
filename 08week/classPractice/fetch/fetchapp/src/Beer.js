import React, { Component } from 'react'

export class Beer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tastes: []
        }
    }

    componentDidMount() {
        fetch('https://api.punkapi.com/v2/beers/random')
            .then((response)=> response.json())
            .then((data) => {
                console.log(data)
                this.setState({
                name: data[0].name,
                img: data[0].image_url,
                tastes: data[0].food_pairing,
                info: data[0].description,
                tag: data[0].tagline
                })
      })
    }

    render() {
    return (
      <div>
          <div className="container">
          <h2> {this.state.name} </h2>
          <h5> {this.state.tag} </h5>
            <div>
                <img alt="beerPic" src={this.state.img} />
            </div>
            <hr />
            <div>
                <h4> Best Paired With:</h4>
                <ul className="pairing">
                    {this.state.tastes.map((eachPair)=> <li key={eachPair}> {eachPair} </li> )}
                </ul>
            </div>
            <hr />
            <div className="info">
                <h4>Description</h4>
                <p>
                    {this.state.info}
                </p>
            </div>
          </div>
      </div>
    )
  }
}

export default Beer
