'use strict';

let nextBtn = document.getElementById('next').addEventListener('click', getContact)
let display = document.getElementById('display')

function getContact(){
    fetch('https://randomuser.me/api/?results=5')
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data.results)
        let output = ''
        data.results.forEach((contact)=> {
            output += `
            <ul>
                <img src='${contact.picture.large}'> 
                <li> Name: ${contact.name.first} ${contact.name.last} </li>
                <li> City: ${contact.location.city} </li>
                <li> Number ${contact.phone} </li>
            </ul>
            `
        })
        display.innerHTML = output;
    }).catch((err)=> console.log(err))
}