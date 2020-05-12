#!/usr/bin/node
require('request').get(process.argv[2], (err, r, body) => {
  if (err) {
    console.log(err);
  } else {
    const response = {};
    const tmp = JSON.parse(body);
    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i].completed) {
        if (!(tmp[i].userId in response)) {
          response[tmp[i].userId] = 0;
        }
        response[tmp[i].userId] += 1;
      }
    }
    console.log(response);
  }
});
