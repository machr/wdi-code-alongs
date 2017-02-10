console.log('Introduction to ECMAscript');
//Javascript is copyrighted to Sun Micro Systems.

//truthy or falsey
// values that are falsey: false, the empt string '', the number 0
// undefined, null

var points = 0;
if (points) {
  console.log('You have ' + points + ' points');
}

var firstname;
if (firstname) {
  console.log('Your firstname is ' + firstname);
}

var currentDate = new Date();
var currentYear = currentDate.getFullYear();

if (currentYear === 2015) {
  console.log("I'm in the present!");
} else if (currentYear < 2015 ) {
  console.log("Whoa! Blast from the past!");
} else {
  console.log("Greetings from the future!");
}
