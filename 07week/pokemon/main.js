"use strict";

let p1 = null;
let p1name = null;
let p1value = null;
let p2 = null;
let p2name = null;
let p2value = null;

let getPokemon1 = () => {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then(function (response) {
      return response.json() //gets the pokemon object and api
    })
    .then(function (data) {
      let random = Math.floor(Math.random() * 20)
      console.log('random: ', random)
      let player = data.results[random]
      p1 = player
      return fetch(player.url) //access that api within that pokemon
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // getting pokemon name here!
      p1value = data.base_experience
    //   console.log('name: ', name, 'p1: ', p1, 'p2: ', p2)
      let p1name = data.species.name.toUpperCase()
        let display = `<h1> ${p1name} </h1>`
        display += 
        `Experience: ${p1value}
        <br>
        <img src="   ${data.sprites.front_shiny}" >
        `
        document.getElementById('pokeName1').innerHTML = display;
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
        console.log('random: ', random)
        let player = data.results[random]
        p2 = player
        return fetch(player.url) //access that api within that pokemon
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // getting pokemon name here!
        p2value = data.base_experience
        // console.log('name: ', name, 'p1: ', p1, 'p2: ', p2)
        let p2name = data.species.name.toUpperCase()
        let display = `<h1> ${p2name} </h1>`
        display += 
        `Experience: ${p2value}
        <br>
        <img src="${data.sprites.front_shiny}" >
        `
        document.getElementById('pokeName2').innerHTML = display;
      })
      .catch(function (error) {
        console.log('Requestfailed', error)
      });
  }

  let checkForWin = ()=> {
      if(p1 !== null && p2 !== null){
          console.log('working here')
          console.log(p1value, p2value)
        if(p1value === p2value){
            console.log(`It's a draw!`)
          } else if(p2 > p1){
            console.log(`Winner: ${p2name}!`)
          } else if(p1 > p2){
            console.log(`Winner: ${p1name}!`)
          }
      }
  }

  let restart = () => {
    window.location.href=window.location.href
  }




