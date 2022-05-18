/*
*  USING JQUERY
*
* ///////////////////////////////////////////////////
*
*  Create a shopping list or todo app that allows
*  a user to add and remove items from a list.
*  Items should have user provided text.
*
*  Ex: Each 'item' can be an input box that allows
*  the user to type text or you can have one text
*  box that a user can type text and click 'add'
*  to add to the list.
*
*  Requirements:
*   -Can add items/tasks to the list
*   -Can remove items/tasks from the list
*   -At least 5 styles applied (color, padding, etc)
*    these can be applied in the header (<style>)
*    or via DOM manipulation or via an external css file.
*    If you use a css file, please upload it
*
*  Please upload your HTML and JS files with your
*  submission along with your css file if you used one.
*/

// YOUR CODE STARTS HERE

/*
event listener to trigger anonymous function on click of the addButton from our HTML
the function adds a list item with input and a delete button
the function then appends those items to the existing shoppingList element
finally, there is another function to delete the listItem when the deleteButton is clicked
*/

$('.addButton').on('click', function(e) {
  var listItem = $('<li><input></input></li>');
  var deleteButton = $('<button></button>').text('X');
  $(deleteButton).addClass('deleteButton');

  $(listItem).append(deleteButton);
  $('#shoppingList').append(listItem);

  $(deleteButton).on('click', function(e) {
    $(listItem).remove();
  });
});

// YOUR CODE ENDS HERE
