#!/usr/bin/node
// Prnts a square of a specified size

const args = process.argv;
const size = parseInt(args[2], 10);
const data = [];

if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    data.push('X');
  }
  for (let i = 0; i < size; i++) {
    console.log(data.join(''));
  }
}