#!/usr/bin/node
// Write a script that prints the addition of 2 integers


const args = process.argv;

function add(a, b) {
     return parseInt(a) + parseInt(b);
}


console.log(add(args[2], args[3]));
