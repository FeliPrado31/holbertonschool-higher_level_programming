#!/usr/bin/node

require('request').get(process.argv[2], (err, r, body) => {
     if (err) {
       console.log(err);
     } else {
       require('fs').writeFile(process.argv[3], body, 'utf-8', err => {
         if (err) {
           console.log(err);
         }
       });
     }
   });