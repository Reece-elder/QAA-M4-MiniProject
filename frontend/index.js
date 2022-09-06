'use strict'

const header = document.querySelector('h1');

fetch('http://localhost:5000/colour').then((response) => {
    response.text().then((data) => {
        header.style.color = data;
    })
})