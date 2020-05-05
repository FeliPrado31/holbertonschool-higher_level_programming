#!/usr/bin/node
// Write a script that prints a square

let n = parseInt(process.argv[2]);

if (n) {
  for (let i = 0; i < n; i++) {
    console.log('X'.repeat(n));
  }
} else if (n < 0) {
  console.log('');
} else {
  console.log('Missing size');
}
