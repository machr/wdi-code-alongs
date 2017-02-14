// 1. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.
var calculateAge = function(birthYear, thisYear){
  var inputAge = birthYear;
  var currentYear = thisYear; //new Date().getFullYear();
  var result = currentYear - inputAge;
  console.log("You are either " + result + " or " + (result - 1) );
};

// calculateAge(1965, 2017);
// calculateAge(1976, 2017);
// calculateAge(1998, 2017);

//  2. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.
var sampleArray = ['Apple', 'Pear', 'Pineapple', 'Dragon'];

var lengths = function(stringsArray){
  var getLength = [];
  for (var i = 0; i < stringsArray.length; i++) {
    getLength.push(stringsArray[i].length );
  }
  return getLength;
};

// 3. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

var transmogrifier = function(a, b, c){
  return Math.pow( (a * b), c );

// Alternatively (more wordy)
// var product = a * b;
// return Math.pow(product, c)
};

// 4. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// split reverse
var wordReverse = function( inputString ) {
  return inputString.split(' ').reverse().join(' ');

};
