'use strict';

let nextBtn = document.getElementById('next').addEventListener('click', getContact)

function getContact(){
    fetch('https://randomuser.me/api/')
    .then((res)=> res.json)
    .then((data)=> {
        console.log(data)
    })
}