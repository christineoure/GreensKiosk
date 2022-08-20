"use strict";
let product = document.getElementById("products")
let Fruits = document.getElementById("fruList")
let Vegetables = document.getElementById("vegList")

// let fetch = require('node-fetch')


fetch("http://localhost:5000/products")
.then(resp => {
    resp.json()
    .then(data => {
        let product = data
        data.forEach(element => {
            data.innerHTML += `<li>${element.name}<li>`
        });
    })
})
.catch(error => { console.log(error) })