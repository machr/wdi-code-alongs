console.log('javascript is working!');

// for (var i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

var count = 1;
while (count < 10) {
  //console.log(count);
  count++;
}
var randomNumber = Math.ceil(Math.random() * count);
var guess = prompt('Guess a number');
while (Number(guess) !== randomNumber) {
  if (guess < randomNumber) {
    guess = prompt('Too Low - Guess again');
  } else if (guess > randomNumber) {
    guess = prompt('Too high - Guess again');

  }
}
  console.log('not bad');
