/*
* USER HAS ALREADY BEEN IMPLEMENTED FOR YOU:
*  User has the following properties:
*    name: string
*    birthday: Date
*
*   User has the following method:
*     getDayBorn: Returns the day of the week that the user was born
*                example: Wednesday
*/
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  this.getDayBorn = function() {
    var days = [`Sunday`,`Monday`,`Tuesday`,
      `Wednesday`,`Thursday`,`Friday`,`Saturday`];

    return days[this.birthday.getDay()];
  }
}

/*
* YOUR TASK IS TO IMPLEMENT CHIRP:
*  Chirp has the following properties:
*   author: User
*   message: string
*   date: Date
*
* Chirp has the following methods:
*   postLength: Returns the length of the message, a number
*              example: 155
*
*   printPost: Uses console.log to print the message, author name, and date
*             example:
*             Hello World
*             By John Doe on Sat Feb 16 2019 00:00:00 GMT-0500 (Eastern Standard Time)
*
*   wasBefore: Accepts a chirp and returns true if the current chirp was posted
*             before the provided chirp, else false
*/
function Chirp(author, message, date) {
  this.author = User.name;
  this.message = message;
  this.date = date;

  this.postLength = function(){
    return this.message.length;
  }

  this.printPost = function(){
    return console.log(`${this.message}\nBy ${author.name} on ${this.date}`);
  }

  this.wasBefore = function(chirp){
    this.chirp = Chirp;
    //console.log(chirp.date);
    // had to use this to see if my parameter was comparing properly
    //console.log(`${date} > ${chirp.date}`);
    return date < chirp.date;
  }
}

// SAMPLE INPUT AND OUTPUT TO VALIDATE YOUR IMPLEMENTATION:
var john = new User(`John Doe`, new Date(`01-30-2000`));
var jane = new User(`Jane Doe`, new Date(`01-20-2000`));


var chirpsByJohn = [
  new Chirp(john, `Hello world!`, new Date(`02-16-2019`)),
  new Chirp(john, `First day of spring!`, new Date(`03-20-2019`)),
  new Chirp(john, `Happy 4th!`, new Date(`07-04-2019`))
];

// 12
console.log(chirpsByJohn[0].postLength());

// Happy 4th!
// By John Doe on Thu Jul 04 2019 00:00:00 GMT-0400 (Eastern Daylight Time)
chirpsByJohn[2].printPost();

// true
console.log(chirpsByJohn[0].wasBefore(chirpsByJohn[1]));

// false
console.log(chirpsByJohn[1].wasBefore(chirpsByJohn[0]));

// node global-objects-activity_ZCarpenter.js

// validating more input
//console.log(chirpsByJohn[2].wasBefore(chirpsByJohn[0]));
//console.log(chirpsByJohn[0].wasBefore(chirpsByJohn[2]));