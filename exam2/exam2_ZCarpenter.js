/*
*   EXAM 2 PART 2
*   Create a review page for a product or
*   restaurant. A review should have a name,
*   details (text), and a rating out of 5.
*
*   Requirements:
*     -Can add a review
*     -After adding a review, form should 'reset'
*     -Review count with total number of reviews
*     -Should have at least one image, can link
*       to an image you found on google.
*     -At least 10 styles applied. These can
*       be applied in the header, (<style>)
*       via DOM manipulation, or an external
*       css file.
*
*   Please upload your HTML and JS files with your
*   submission along with your css file if you used one.
*/


// YOUR CODE STARTS HERE

// create a variable to access the reviews section of the page
var review = document.getElementById('reviews');


var submitReview = document.getElementById('submitButton');
// dom eventlistener - when clicked call the add function
submitReview.addEventListener(`click`, addReview, false);

// set the review count
var reviewCount = 0;
var reviewCountDisplay = document.getElementById('reviewCount');

// create a global variable to hold the clicked rating button's value
var clickedRating;
// call rating value to store the value in our variable
ratingValue();


// click the add button and add the review to the page
function addReview(event) {

    // get the name of the user
    var userName = document.getElementById('reviewerName').value;
    
    // get the review text
    var userReviewText = document.getElementById('reviewDetails').value;

    // create a new paragraph element
    var newEl = document.createElement('p');

    // create a textNode that adds all our review info
    var newReview = document.createTextNode(userName);
    
    var elStyle = document.createElement('span');
    elStyle.setAttribute('style', 'font-family: Courier New, Courier, monospace; font-weight: 400; font-style: normal; line-height: 1.5em; letter-spacing: 1px; font-size: 25px;');

    var lineBreak = document.createElement('p');
    var hr = document.createElement('hr');

    newEl.appendChild(elStyle);

    document.getElementById('reviews').appendChild(elStyle);

    // append the review info to the new paragraph
    newEl.appendChild(newReview);
    newEl.appendChild(lineBreak);

    // tried to put this on a separate line but couldn't figure it out
    newReview = document.createTextNode(clickedRating);
    newEl.appendChild(newReview);
    newEl.appendChild(lineBreak);

    newReview = document.createTextNode(userReviewText);
    newEl.appendChild(newReview); 
    newEl.appendChild(hr);  
    

    // append the paragraph to the review paragraph section of my page
    review.appendChild(newEl);


    // update review count header
    reviewCount++;
    // this conditional displays '1 Review' when the count is one
    if (reviewCount === 1) {
        reviewCountDisplay.textContent = reviewCount + ' Review';
    }
    else {
        reviewCountDisplay.textContent = reviewCount + ' Reviews';
    }

    // call clear review to clear the fields after clicking submit
    clearReview();
}

/* 
ratingValue selects all the rating buttons, then uses forEach loop to go through
and add an anonymous eventListener function. The function assigns the clicked rating to the value of the button
*/
function ratingValue(e) {
    var ratingButtons = document.querySelectorAll('.ratingButton');
    ratingButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            clickedRating = btn.value;
        });
    });
}

// clear the review fields' values
function clearReview(event) {
    var clearName = document.getElementById('reviewerName');
    clearName.value = '';

    var clearDetails = document.getElementById('reviewDetails');
    clearDetails.value = '';
}

// YOUR CODE ENDS HERE