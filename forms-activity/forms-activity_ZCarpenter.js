/*
*  Create a form that handles submit and reset.
*  You have free reign to decide what the form
*  will be for, but the information provided should
*  be shown back to the user in a read only fashion.
*  It should allow the user to repeatedly fill out
*  the form and appending the read only data to the
*  page.
*
*  Requirements:
*  ✓-A <form> element with contained controls
*  ✓-At least 5 form fields
*  ✓-At least 3 types of form fields:
*   ✓ ~text input
*   ✓ ~email input
*   ✓ ~textarea
*     ~checkbox
*   ✓ ~radio button
*     ~slider
*     ~etc
*   -At least 3 fields with validation:
*   ✓ ~min/max number value
*   ✓ ~character count min/max
*   ✓ ~required field
*     ~regex pattern
*     ~etc
*  ✓-Form fields should have labels
*  ✓-A submit button
*  ✓-On submit, inputs should be displayed read only
*     and form should be reset.
*  ✓-A reset button that resets form fields
*  ✓-At least 10 styles (color, font size, etc)
*
*  Please upload your HTML and JS files with your
*  submission along with your css file if you used one.
*/

// YOUR CODE STARTS HERE

// variable to hold access to the form
var form = document.getElementById('purchaseTrackerForm');

// set an event listener on the form that calls an anonymous function
form.addEventListener('submit', function(e) {
  // prevent the form from trying to submit and refreshing the page
  e.preventDefault();

  // grab the form elements
  var elements = this.elements;

  // grab the values for each of our form fields
  var purchaserName = elements.purchaserName.value;
  var purchaserEmail = elements.email.value;
  var cost = elements.cost.value;
  var supplier = elements.supplier.value;
  var notes = elements.notes.value;

  // format the output of our cost field
  var formattedCost = '$' + cost;
  
  // variable for where we want to append our data
  var outputData = document.getElementById('output');

  // create rows to store the data
  var dataRow = document.createElement('tr');

  /*
  create a new td, new textNode, append the textNode to the td
  and finally, append the td to the output variable
  do this for each form value
  */
  var td1 = document.createElement('td');
  var nameText = document.createTextNode(purchaserName);
  td1.appendChild(nameText);
  dataRow.appendChild(td1);

  var td2 = document.createElement('td');
  var emailText = document.createTextNode(purchaserEmail);
  td2.appendChild(emailText);
  dataRow.appendChild(td2);

  var td3 = document.createElement('td');
  var costText = document.createTextNode(formattedCost);
  td3.appendChild(costText);
  dataRow.appendChild(td3);

  var td4 = document.createElement('td');
  var supplierText = document.createTextNode(supplier);
  td4.appendChild(supplierText);
  dataRow.appendChild(td4);

  var td5 = document.createElement('td');
  var notesText = document.createTextNode(notes);
  td5.appendChild(notesText);
  dataRow.appendChild(td5);

  // append the row to the table body
  outputData.appendChild(dataRow); 

  // clear the form
  clearForm();
  
}, false);

// clears form values
function clearForm() {
  document.getElementById('purchaserName').value = '';
  document.getElementById('email').value = '';
  document.getElementById('cost').value = '';

  // loop through and set all the radio buttons to unchecked
  var sup = document.getElementsByName('supplier');
  for (var i = 0; i < sup.length; i++) {
    sup[i].checked = false;
  }

  document.getElementById('notes').value = '';
}

// YOUR CODE ENDS HERE
