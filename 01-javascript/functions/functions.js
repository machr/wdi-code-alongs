

var numberWeTellTheWorld = 5000;
// variable scope
var launchMissile = function(type){
  var numberOfMissiles = 0;
  console.log(type + ' missile is fired!');
};

var hello = function(name){ // parameter
  console.log('Hello ' + name);
};

var doubleMe = function(number){
  return number * 2;
};

var calmYourself = function(input) {
  var result = input;
  if ( result.indexOf('!' > - 1) ) { // Checks if there is a "!" in any of the index of the string. If the isn't it will return '- 1', therefore it should be bigger than
  //  var inputLower = result.toLowerCase();
  //  inputLower = inputLower.replace(/!/g,'');

  // Chained
  var inputLower = result.toLowerCase().replace(/!/g,'');
    return('Without yelling: "' + inputLower + '"');
  }
};
