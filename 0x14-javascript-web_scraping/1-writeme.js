#!/usr/bin/node
const fs = require('fs');

const argstr = process.argv[3];

fs.writeFile(process.argv[2], argstr, (err, argstr) => {
  if (err) {
    console.log(err);
  }
});
