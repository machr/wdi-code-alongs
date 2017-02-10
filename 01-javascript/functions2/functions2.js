// console.log('fun with functions!');

var addTwoNumbers = function(num1, num2){
  return num1 + num2;
};

var awesomeObject = {};
awesomeObject.owner = 'me';

// When a function is part of a object, we call it a method
awesomeObject.addTwoNumbers = addTwoNumbers;
// awesomeObject.addTwoNumbers = addTwoNumbers(); - Adding parenthesis will
// assign the value of addTwoNumbers to awesomeObject.addTwoNumbers.

// setTimeOut(somefunction, 1000); setTimeOut delays execution of the passed in function (somefunction) to value in microseconds
