#!/usr/bin/node
const args = process.argv;

if (!parseInt(args[2])) return console.log('Missing size');

for (let x = parseInt(args[2]); x > 0; x--) {
  let size = '';
  for (let x = parseInt(args[2]); x > 0; x--) {
    size += 'X';
  }
  console.log(size);
}