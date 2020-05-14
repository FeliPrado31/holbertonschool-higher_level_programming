// Write a Javascript script that adds, removes and clears LI elements from a list when the user clicks:

document.addEventListener('DOMContentLoaded', event => {
  $('#add_item').click(() => $('UL.my_list').append('<li>Item</li>'));
  $('#remove_item').click(() => $('UL.my_list li:last-child').remove());
  $('#clear_list').click(() => $('UL.my_list').empty());
});
