'use strict';
// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

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
  }

  class Team {
    constructor(name, mascot, teamColor){
        this.name = name,
        this.mascot = mascot,
        this.teamColor = teamColor,
        this.teammates = []
    }
  }

  const broncos = new Team("Broncos", "Horse", "Blue")
  const raiders = new Team("Raiders", "Cowboy", "Red")
  
// see the people list
  const listOfPeople = () => {
  document.getElementById('firstList').remove(this)
  const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Register"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + ":  "))
      li.appendChild(document.createTextNode(person.placeBorn + " - " + person.skillSet))
      listElement.append(li)
    })
  }

  const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)
    listOfPlayers.push(arrOfPeople[id - 2]) //working, adding clicked li to new array, listofplayers.
    console.log(arrOfPeople, listOfPlayers)
    console.log(id)
  }

// see the players list
  const playerList = () => {
    document.getElementById('secondList').remove(this)
    const playerlistElement = document.getElementById('players')
        listOfPlayers.map(player => {
          const li = document.createElement("li")
          const blueButton = document.createElement("button")
          li.setAttribute('id', '${person.id}')
          blueButton.innerHTML = "Join the Broncos!"
          blueButton.addEventListener('click', function(){
            blueTeam.push(player.name)
            document.getElementById('${person.id}').remove(this)
            console.log(blueTeam)
          })
          const redButton = document.createElement("button")
          li.setAttribute('id', '${person.id}')
          redButton.innerHTML = "Join the Raiders!"
          redButton.addEventListener('click', function() { 
            redTeam.push(player.name)
            document.getElementById('${person.id}').remove(this)
            console.log(redTeam)
          })
          li.appendChild(blueButton)
          li.appendChild(redButton)
          li.appendChild(document.createTextNode(player.name))
          playerlistElement.append(li)
          })
    console.log(listOfPlayers)
  }


// // To show the broncos list
  const broncosList = () => {
  const broncolistElement = document.getElementById('blue')
    blueTeam.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      li.appendChild(document.createTextNode(person))
      broncolistElement.append(li)
    })
  }

// // To show the raiders list
  const raidersList = () => {
  const raiderslistElement = document.getElementById('red')
    redTeam.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      li.appendChild(document.createTextNode(person))
      raiderslistElement.append(li)
    })
  }

// Tests

// if (typeof describe === 'function') {
//   describe('#playersList)', () => {
//     it('should ...', () => {
//       assert.equal(/*something*/);
//     });
//     it('should ...', () => {
//       assert.equal(/*something, 'returns'*/);
//     });
//   });

//   describe('/*some function*/', () => {
//     it('should ...', () => {
//       assert.equal( /*something, 'returns'*/);
//     });
//     it('should ...', () => {
//       assert.equal(/*something, 'returns'*/);
//     });

//   });

//   describe('/*some function*/', () => {
//     it('should ...', () => {
//       assert.equal( /*something, 'returns'*/);
//     });
//     it('should ...', () => {
//       assert.equal(/*something, 'returns'*/);
//     });

//   });
// } else {
//   // getPrompt();
// }