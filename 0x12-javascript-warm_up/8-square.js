#!/usr/bin/node
const args = process.argv;

if (!parseInt(args[2])) {
  console.log('Missing size');
} else {
  for (let y = parseInt(args[2]); y > 0; y--) {
    let size = '';
    for (let x = parseInt(args[2]); x > 0; x--) {
      size += 'X';
    }
    console.log(size);
  }
}
