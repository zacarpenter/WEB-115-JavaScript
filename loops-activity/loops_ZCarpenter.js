// Name: Zac Carpenter
// Date: 10/11/2021
// WEB 115 001 - Loops Activity

/* Durham tech is hosting an event for students to attend
*  various presentations around campus. A presentation
*  may have many students attending and a student may attend
*  many presentations.
*
*  Your task is to implement the registration system.
*  Given a list of presentations, you should request
*  and record the names of the students attending.
*  A blank entry should terminate and move to the next
*  presentation. After recording the attendee names
*  for each presentation, a prompt should allow the
*  user to provide a presentation name to receive
*  a list of the students attending.
*
*  Use window.prompt and window.alert to request
*  and provide user feedback.
*/

// You can modify this array for testing, and build objects
// maps, etc based off of the array, but your program
// should function with different array elements
// In other words, I will modify the elements in this array
// and your program should still function!
var presentations = [`A`, `Security 101`, `Philanthropy`];

// YOUR CODE STARTS HERE

var getAttendees;

var attendees = [];

for (x = 0; x < presentations.length; x++) {
    // loop goes through the presentations array and creates an array of attendees array for each index
    attendees[x] = new Array();

    // while loop to move through each index of presentations prompting the user
    while (true) {
        getAttendees = window.prompt(`Enter an attendee name for ${presentations[x]}: `);

        // check if the entry is not blank
        if (getAttendees != '') {
            // then add the entry (getAttendees) to the array of array attendees
            attendees[x].push(getAttendees);
        }
        // if the entry was blank, break from that index of presentations and move to the next index to prompt for attendees
        else {
            break;
        }
    }
}

// prompt user for the presentation name
var displayAttendees = window.prompt(`Enter a presentation name to list attendees: `);

// check that the presenation entered matches an index in the presentations array
if (presentations.includes(displayAttendees)) {
    // just to simplfy create a variable to hold the index number of presentations
    var indexAA = presentations.indexOf(displayAttendees);
    
    // use the index of presentations to display the cooresponding attendees array
    window.alert(attendees[indexAA].toString());
  
}
// YOUR CODE ENDS HERE