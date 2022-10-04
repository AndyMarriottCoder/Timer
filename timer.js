// Testing Plan for what it include in the app
/*
Timer
Start*
Stop
Reset
Setting value (1)* - COMPLETE
User input?
Countdown - COMPLETE*
*/

// ------------------------------------------------------------------ //

var readlineSync = require('readline-sync');

// Number variables to feed into function
var startnumber = 60
var endnumber = 0
var decreasenumber = 1
var currentnumber = startnumber

inputNumber = readlineSync.questionInt('Enter your starting number: ');

// Function used to determine current number and display output
var myInt = setInterval(function () {
    // (currentnumber=currentnumber-decreasenumber);
    // console.log(currentnumber)

// Find the distance between now and the count down date
var countdownTimer = inputNumber - decreasenumber;

// Time calculations for days, hours, minutes and seconds
function timeCalculation(){
var hours = Math.floor((countdownTimer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((countdownTimer % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((countdownTimer % (1000 * 60)) / 1000);
};

// Clears the timer when it reaches 0
if(countdownTimer <=0) {
    clearInterval(myInt);
}

// Call to the GUI
timeCalculation('countdownTimerGUI');

}, 1000);

