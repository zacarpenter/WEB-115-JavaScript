/*
*  The document object provides a number of methods and
*  properties to access and manipulate elements. Given the
*  provided HTML file, manipulate the header, paragraph,
*  and list items.
*
*  The HTML file contains:
*   -h1 header
*   -p paragraph
*   -ul unordered list
*     -li (3x) list items
*
*  You can choose how to select the elements
*  (by class, tag, id, etc) and what text to fill
*  the elements with. Your manipulation should be
*  done fully from javascript and you should not
*  modify the html file directly.
*
*  Requirements:
*   -Every element should have text (h1, p, li)
*   -At least 2 elements should have styles applied
*   -The ul only has 3 li, add a 4th *to the list*
*
*  Please upload the (unmodified) HTML file with
*  your submission.
*/


// YOUR CODE STARTS HERE

// Select the element and store it in a variable
var header = document.getElementById('header');

// Change the value of the header text
header.textContent = 'Some of my Favorite Anime';

// Change the style of the header text
header.setAttribute('style', 'font-family: Courier New; text-shadow: 2px 2px 3px grey');

// Update the paragraph contents and style
var paragraph = document.getElementsByTagName('p');
paragraph[0].textContent = 'This list is by no means comprehensive, but it contains some of my all time and most recent favorites. List updated as of 10/24/2021.';
paragraph[0].setAttribute('style', 'font-family: Courier New; color: #424bf5; font-style: italic');

// Update the first list item
var item1 = document.getElementsByTagName('li')[0].textContent = 'Demon Slayer - Kimetsu no Yaiba';

// Update the second list item
var item2 = document.getElementsByTagName('li')[1].textContent = 'Rent-A-Girlfriend - Kanojo, Okarishimasu';

// Update the third list item
var item3 = document.getElementsByTagName('li')[2].textContent = 'KonoSuba - Kono Subarashii Sekai ni Shukufuku o!';


// Create a new element and store it in a variable
var item4 = document.createElement('li');

// Create a text node and store it in a variable
var item4Text = document.createTextNode('The Quintessential Quintuplets - Go-Tobun no Hanayome');

// Attache the new text node to the new element
item4.appendChild(item4Text);

// Find the position where the new element should be added
var listPosition = document.getElementsByTagName('ul')[0];

// Insert the new element into its position
listPosition.appendChild(item4);

// loop to update the styling for my list
var listStyle = document.getElementsByTagName('ul');
if (listStyle.length > 0) {
    for (var i = 0; i < listStyle.length; i++) {
        listStyle[i].setAttribute('style', 'font-family: Courier New; line-height: 1.5; font-weight: bold');
    }
}


// YOUR CODE ENDS HERE
