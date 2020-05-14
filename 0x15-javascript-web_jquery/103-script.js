// Write a Javascript script that fetches and prints how to say “Hello” depending of the language

$(() => {
  $('#btn_translate').click(() => {
    const lang = $('#language_code').val();
    $.getJSON('https://www.fourtonfish.com/hellosalut/?lang=' + lang, res => $('#hello').html(res.hello));
  });
  $('#language_code').on('keypress', (event) => {
    if (event.which === 13) {
      $('#btn_translate').click();
    }
  }
  );
});
