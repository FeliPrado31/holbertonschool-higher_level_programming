// Write a Javascript script that adds a LI element to a list when the user clicks on the tag DIV#add_item:

$('div#add_item').click(() => $('ul.my_list').append('<li>Item</li>'));
