#!/usr/bin/node
module.exports = class Square extends require('./5-square') {
     charPrint (obj) {
       if (obj === undefined) {
         obj = 'X';
       }
   
       for (let i = 0; i < this.height; i++) {
         console.log(obj.repeat(this.width));
       }
     }
   };