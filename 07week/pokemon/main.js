"use strict";

let p1 = null;
let p2 = null;

let getPokemon1 = () => {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then(function (response) {
      return response.json() //gets the pokemon object and api
    })
    .then(function (data) {
      let random = Math.floor(Math.random() * 20)
      console.log('randon: ', random)
      let player = data.results[random]
      p1 = player
      return fetch(player.url) //access that api within that pokemon
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // getting pokemon name here!
      let name = data.species.name
      let baseExp1 = data.base_experience
      console.log('name: ', name, 'p1: ', p1, 'p2: ', p2)
      power(baseExp1)
      
    })
    .catch(function (error) {
      console.log('Requestfailed', error)
    });
}

let getPokemon2 = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then(function (response) {
        return response.json()//getis the pokemon object and api
      })
      .then(function (data) {
        let random = Math.floor(Math.random() * 20)
        console.log('randon: ', random)
        let player = data.results[random]
        p2 = player
        return fetch(player.url) //access that api within that pokemon
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // getting pokemon name here!
        let name = data.species.name
        let baseExp2 = data.base_experience
        console.log('name: ', name, 'p1: ', p1, 'p2: ', p2)
        power(baseExp2)
      })
      .catch(function (error) {
        console.log('Requestfailed', error)
      });
  }

  let power = (exp) => {
    console.log(exp)
    checkForWin()
  }

  let checkForWin = ()=> {
      if(p1 !== null && p2 !== null){
        console.log(p1.url, p2.url)
      }
  }

  let restart = () => {
      //code here
  }




