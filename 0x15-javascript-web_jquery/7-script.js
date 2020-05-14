// Write a Javascript script that fetches and replaces the name of this URL: https://swapi-api.hbtn.io/api/people/5/?format=json

let url = 'https://swapi-api.hbtn.io/api/people/5/?format=json';
$.get(url, data => $('div#character').text(data.name))
