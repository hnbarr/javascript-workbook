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
    joinTeam(teamName) {
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
    
    seeTeam() {
     //to view team here, as its being built or anytime really!
     //similar to the listOfPeople, below.
    }
  
  }

  const broncos = new Team("Broncos", "Horse", "Blue")
  const raiders = new Team("Raiders", "Cowboy", "Red")

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
    //need to be able to remove from arrofpeople and move to listOfplayers arr.
    console.log(id) //index will be id - 2
    listOfPlayers.push(arrOfPeople[id - 2]) //undefined, but adding new  value into arr per click. kindof working
    arrOfPeople.slice(arrOfPeople[id - 2], 1) //not removing people from arr.
    console.log(arrOfPeople)
    console.log(listOfPlayers)
    // console.log(arrOfPeople[0])
    
  }

//idk if i need these?

//   const playersNeedingTeams = () => {
//     listOfPlayers.map(person => {
//         const li = document.createElement("li")
//         const redBtn = document.createElement("button")
//         button.innerHTML = "Raiders- Red Team"
//         button.addEventListener('click', function() {joinTeam(teamName)} )
//         li.appendChild(redBtn)
//         li.appendChild(document.createTextNode(person.name))
//         listElement.append(li)

//         //

//         const blueBtn = document.createElement("button")
//         button.innerHTML = "Broncos- Blue Team"
//         button.addEventListener('click', function() {joinTeam(teamName)} )
//         li.appendChild(blueBtn)
//         li.appendChild(document.createTextNode(person.name))
//         listElement.append(li)
//       })
//   }
