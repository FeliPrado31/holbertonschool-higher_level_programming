// Write a Javascript script that fetches from https://fourtonfish.com/hellosalut/?lang=fr and displays the value of hello from that fetch in the HTML’s tag DIV#hello.

let url = 'https://fourtonfish.com/hellosalut/?lang=fr';
$.getJSON(url, res => $('#hello').text(res.hello));
