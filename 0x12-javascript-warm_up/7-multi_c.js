#!/usr/bin/node
// Write a script that prints x times “C is fun”

let n = parseInt(process.argv[2]);
if (n) {
  for (let i = 0; i < process.argv[2]; i++) {
    console.log("C is fun");
  }
} else {
  console.log("Missing number of occurrences");
}
