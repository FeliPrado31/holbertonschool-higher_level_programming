#!/usr/bin/node

const request = require('request');
const film = process.argv[2];
const url = 'http://swapi.co/api/people/';

getPeople(film, url);

function getPeople (film, url) {
  request(url, (err, response, body) => {
    if (err) {
      console.log(err);
    } else if (response.statusCode === 200) {
      const res = JSON.parse(body);
      const people = res.results;
      for (const i in people) {
        for (const j in people[i].films) {
          if (people[i].films[j].includes(film)) {
            console.log(people[i].name);
          }
        }
      }
      if (res.next !== null) {
        getPeople(film, res.next);
      }
    } else {
      console.log('An error occured. Status code: ' + response.statusCode);
    }
  });
}
