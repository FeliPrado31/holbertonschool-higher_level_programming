#!/usr/bin/node
// Write a script that searches the second biggest integer in the list of arguments.
const argsLen = process.argv.length;

if (argsLen === 2 || argsLen === 3) {
  console.log('0');
}

function restNumber (a, b) {
  return a - b;
}

const arr = [];

for (let i = 2; i < argsLen; i++) {
  arr.push(process.argv[i]);
}
arr.sort(restNumber);

console.log(arr[arr.length - 2]);
