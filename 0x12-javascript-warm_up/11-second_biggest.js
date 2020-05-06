#!/usr/bin/node
const len = process.argv.length;
if (len <= 2) {
  console.log(0);
} else if (len === 3) {
  console.log(0);
} else {
  getNumber();
}

function getNumber () {
  const num = process.argv.sort(function (a, b) { return b - a; });
  console.log(num[3]);
}
