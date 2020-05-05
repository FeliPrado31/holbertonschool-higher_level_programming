#!/usr/bin/node
const n = parseInt(process.argv[2]);
let square = '';
if (Number.isInteger(n)) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      square += 'X';
    }
    if (i < n - 1) {
      square += '\n';
    }
  }
  console.log(square);
} else {
  console.log('Missing size');
}