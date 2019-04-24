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
        this.placeBord = placeBorn
    }
    // registerPlayer(id){
    //   registerBtn = document.getElementById('registerBtn')
    //   registerBtn.addEventListener('click', function() {this.registerPlayer()})
   
    //   this.arrOfPeople[arrOfPeople[id]] = new Registered ('yes', 'yes', 'yes', 'yes', '2') //to add these values to each registered player
    //   listOfPlayers.push(this.arrOfPeople[arrOfPeople[id]])
    //   document.getElementById('applicant').remove(this) //to remove li once clicked on and moved to players
    // }
    //register player is the same as makePlayer, below.. ? wtf
  }

  class Registered extends Player{
    constructor(canThrow, canDodge, isHealthy, hasPaid, yearsOfExperience, id, name, age, skillSet, placeBord){
      super(id, name, age, skillSet, placeBord),
      this.canThrow = canThrow,
      this.canDodge = canDodge,
      this.isHealthy = isHealthy,
      this.hasPaid = hasPaid,
      this.yearsOfExperience = yearsOfExperience
    }
    joinTeam(team){
      team.teammates.push(this.arrOfPeople[arrOfPeople[id]])
    }
  }

  class Team {
    constructor(name, mascot, teamColor){
        this.name = name,
        this.mascot = mascot,
        this.teamColor = teamColor,
        this.teammates = []
    }

    showTeam(){
      if(name === 'Broncos'){
        teammates = blueTeam
      } else if(name === 'Raiders'){
        teammates === redTeam
      }
    }
  }

  const broncos = new Team("Broncos", "Horse", "Blue")
  const raiders = new Team("Raiders", "Cowboy", "Red")
  
// see the people list
  const listPeopleChoices = () => {
  document.getElementById('firstList').remove(this)
  const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      li.setAttribute('id', 'applicant')
      button.innerHTML = "Register"
      button.setAttribute('id', 'registerBtn')
      button.addEventListener('click', function() {makePlayer(person.id)})
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + ":   "))
      li.appendChild(document.createTextNode(person.placeBorn))
      listElement.append(li)
    })
  }

  const makePlayer = (id) => {
    listOfPlayers.push(arrOfPeople[id - 2]) //working, adding clicked li to new array, listofplayers.
    document.getElementById('applicant').remove(this)
    console.log('moved into players array:',listOfPlayers)
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
            console.log('blue team array', blueTeam)
          })
          const redButton = document.createElement("button")
          li.setAttribute('id', '${person.id}')
          redButton.innerHTML = "Join the Raiders!"
          redButton.addEventListener('click', function() { 
            redTeam.push(player.name)
            document.getElementById('${person.id}').remove(this)
            console.log('red team array', redTeam)
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

// To reset page
const reset = () => {
  window.location.href=window.location.href
}
