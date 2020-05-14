// Write a Javascript script that toggles the class of the HTML tag HEADER to red (#FF0000) when the user clicks on the tag DIV#toggle_header:

$('div#toggle_header').click(() => {
  let header = $('header');
  if (header.hasClass('green')) {
    header.removeClass('green');
    header.addClass('red');
  } else if (header.hasClass('red')) {
    header.removeClass('red');
    header.addClass('green');
  }
});
