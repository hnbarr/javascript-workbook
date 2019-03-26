'use strict';

const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  class Player {
    constructor(id, name, age, skillSet, placeBorn){
        this.id = id,
        this.name = name,
        this.age = age,
        this.skillSet = skillSet,
        this.placeBord = placeBorn,
        this.team = null
    }

    //methods here
    // showPlayers(){
    //     const playerlistElement = document.getElementById('players')
    //     listOfPlayers.map(player => {
    //       const li = document.createElement("li")
    //       const button = document.createElement("button")
    //       button.innerHTML = "Join a Team!"
    //       //   button.addEventListener('click', function() { /* function here joinTeam */ } )
    //       li.appendChild(button)
    //       li.appendChild(document.createTextNode(player.name))
    //       playerlistElement.append(li)
    //       })
    // }

    joinTeam(teamName) {
        console.log(this)
        this.teamName = teamName
        teamName.teammates.push(this)
        //need to remove from arrOfPeople arr, after pushing to new arr, players
        // listOfPlayers.remove(this);
      }
  }

  class Team {
    constructor(name, mascot, teamColor){
        this.name = name,
        this.mascot = mascot,
        this.teamColor = teamColor,
        this.teammates = []
    }

    // methods here
    removePlayer(){

    }

  }

  const broncos = new Team("Broncos", "Horse", "Blue")
  const raiders = new Team("Raiders", "Cowboy", "Red")
  
// see the people list
  const listOfPeople = () => {
  const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }

  const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)
    listOfPlayers.push(arrOfPeople[id - 2]) //working, adding clicked li to new array, listofplayers.
    arrOfPeople.splice(arrOfPeople[id - 2], 1) //working removal of person in array.
    console.log(arrOfPeople)
    console.log(listOfPlayers)
    console.log(id)
    // console.log(arrOfPeople[0])
    // let updateList = ()=> {
    //     return arrOfPeople
    //   }
    // updateList()
  }

// see the players list
  const playerList = () => {
    const playerlistElement = document.getElementById('players')
        listOfPlayers.map(player => {
          const li = document.createElement("li")
          const button = document.createElement("button")
          button.innerHTML = "Join a Team!"
          //   button.addEventListener('click', function() { /* function here joinTeam */ } )
          li.appendChild(button)
          li.appendChild(document.createTextNode(player.name))
          playerlistElement.append(li)
          })
  }

// // see the broncos list
//   const broncosList = () => {
//   const broncolistElement = document.getElementById('blue')
//     broncos.map(person => {
//       const li = document.createElement("li")
//       const button = document.createElement("button")
//       //   button.innerHTML = "Delete Player"
//       //   button.addEventListener('click', function() { /* new function here deletePlayer */ } )
//       li.appendChild(button)
//       li.appendChild(document.createTextNode(person.name))
//       broncolistElement.append(li)
//     })
//   }

// // see the raiders list
//   const raidersList = () => {
//   const raiderslistElement = document.getElementById('red')
//     raiders.map(person => {
//       const li = document.createElement("li")
//       const button = document.createElement("button")
//       //   button.innerHTML = "Delete Player"
//       //   button.addEventListener('click', function() { /* new function here deletePlayer */ } )
//       li.appendChild(button)
//       li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
//       raiderslistElement.append(li)
//     })
//   }