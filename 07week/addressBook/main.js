'use strict';

let nextBtn = document.getElementById('next').addEventListener('click', getContact)
let display = document.getElementById('display')

function getContact(){
    fetch('https://randomuser.me/api/?results=5')
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data.results)
        let output = '<h2> Hello, Friends </h2>'
        data.results.forEach((contact)=> {
            output += `
            <ul>
                <img src='${contact.picture.thumbnail}'> 
                <li> name: ${contact.name.first} ${contact.name.last} </li>
                <li> city: ${contact.location.city} </li>
                <li> phone number: ${contact.phone} </li>
            </ul>
            `
        })
        display.innerHTML = output;
    })
}