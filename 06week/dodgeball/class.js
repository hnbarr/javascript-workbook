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

  const listOfPlayers = [];
  const blueTeam = [];
  const redTeam = [];
  
  class Player{
      constructor(id, name, skillSet, placeBorn){
          this.id = id,
          this.name = name,
          this.skillSet = skillSet,
          this.placeBorn = placeBorn
      }

      showPlayers(){
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
  }

//   class Player {
//     constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
//         // super(id, name, skillSet, placeBorn);
//     }
//   }

  class BlueTeammate {
    constructor(){}
  }
  class RedTeammate {
    constructor(){}
  }

  const showRegistered = (id) => {
    console.log()
  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      li.setAttribute('id', 'applicant')
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  const makePlayer = (id) => {
    arrOfPeople.map(person=>{
        if(id === person.id){
            const theId = person.id;
            const name = person.name;
            const age = person.age;
            const skillSet = person.skillSet;
            const placeBorn = person.placeBorn; 
            const newPlayer = new Player(theId, name, age, skillSet, placeBorn);
            listOfPlayers.push(newPlayer);
            document.getElementById('applicant').remove(this)
        }
    })
    console.log("listOfPlayers:", listOfPlayers)
  }

  const reset = () => {
  window.location.href=window.location.href
  }
