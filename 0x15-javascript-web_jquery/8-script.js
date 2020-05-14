// Write a Javascript script that fetches and lists all movies title by using this URL: https://swapi-api.hbtn.io/api/films/?format=json

let url = 'https://swapi-api.hbtn.io/api/films/?format=json';
$.get(url, data => {
  for (let i = 0; i < data.count; i++) {
    $('ul#list_movies').append('<li>' + data.results[i].title + '</li>');
  }
});
