/*
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

// create a variable to access the list
var list = document.getElementById('list');

var addListItem = document.getElementById('addButton');
addListItem.addEventListener(`click`, addItem, false); // dom eventlistener - when clicked call the add function

// function for clicking add button
function addItem() {
    // create the element
    var addListItem = document.createElement('li');

    // add the innerHTML for the element and deleteButton - delete button uses onclick to remove item
    addListItem.innerHTML = "<input type='text' id='listItem' placeholder='Add an item...'></input><button type='button' class='deleteButton' onclick = 'deleteItem(this.parentElement)'>X</button>";
    
    // setAttribute to style the list

    // append the addListItem element to the list
    document.getElementById('list').appendChild(addListItem);
}

// function for deleting list item
function deleteItem(item) {
    // remove the specific child item from the list
    list.removeChild(item);
}

// YOUR CODE ENDS HERE

/* Tried this first, couldn't figure out how to make it work
var deleteListItem = document.getElementsByClassName('deleteButton');
deleteListItem.addEventListener(`click`, deleteItem, false);
*/