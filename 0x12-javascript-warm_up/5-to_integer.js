#!/usr/bin/node
// Write a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:

let n = parseInt(process.argv[2]);

if (n) {
  console.log('My number: ' + n);
} else {
  console.log('Not a number');
}
