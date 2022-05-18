/*
*   Your task is to create a calculator. You can create
*   your calculator using any of the DOM manipulation
*   techniques we learned throughout the semester. Use
*   javascript's eval function to perform the calculation.
*   If an error occurs, show ERROR on the calculator
*   'screen'.
*
*   Example of using eval: var result = eval('10+4*2');
*
*   Requirements:
*     - Buttons for every digit 0-9
*     - Buttons for +, -, /, *
*     - Button to backspace or clear <-
*     - Button to execute calculation =
*     - Calculator 'screen' should update as buttons
*       are pressed including numbers, operations, etc
*     - Result should show on calculator 'screen'
*     - Upon submitting and showing result, calculator
*       should reset on next button click, starting new
*       calculation
*     - If an error occurs, for example inputting ---6,
*       calculator 'screen' should output 'ERROR'
*     - Calculator 'screen' should fit at least 10
*       characters
*     - At least 12 CSS styles
*
*   Submit your JS file, HTML file, and optional CSS/jquery
*   file. Refer to images in Sakai for guidance.

can modify html
pass the `string` of buttons clicked into the eval function
*/

// flag - checks if equal button was clicked
var calcComplete = false;
var expression = "";

$(document).ready(function() {

    // add button value to display
    $('.calcBtn, .operator').on('click', function() {
        // if flag is false excecute
        if (!calcComplete) {
            // grab the text that was entered from the button
            expression = $(this).text();
            // display the button value
            $('#displayArea').val($('#displayArea').val() + expression);

        } // flag is true - clear input and reset flag
        else {
            
            // clear input first
            $('#displayArea').val('');

            // reset flag
            calcComplete = false;

            // display button values (there has to be a way to not copy paste this code)
            expression = $(this).text();
            $('#displayArea').val($('#displayArea').val() + expression);
        }
    });

    // backspace click
    $('#backspace').on('click', function() {
        if(!calcComplete){
            // grab the value and remove
            $('#displayArea').val($('#displayArea').val().substring(0, $('#displayArea').val().length - 1));
        }
        else {
            // clear the display
            $('#displayArea').val('');
        }
        
    });

    // eval - with error
    $('#calculate').on('click', function() {
        // try to use eval on the display
        try {
            // switch the flag
            calcComplete = true;

            var result =  eval($('#displayArea').val());
            var equalSign = $(this).text();

            // display the result
            $('#displayArea').val($('#displayArea').val() + equalSign + ' ' + result);
        } catch(e) {
            // catch the issue and display the error
            $('#displayArea').val('ERROR');
            // swith the flag
            calcComplete = true;
        }
    });
});