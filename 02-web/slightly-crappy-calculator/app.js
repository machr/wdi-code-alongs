console.log('JS is connected');

var addTwoNumbers = function(num1, num2){
  return num1 + num2;
};

var calculatorBody = document.querySelector('.calculator-body');
var crapItBtn = document.querySelector('.crap-it-btn');
var clearBtn = document.querySelector('.clear-it-btn');

var num1Input = document.querySelector('.num1-input');
var num2Input = document.querySelector('.num2-input');
var resultInput = document.querySelector('.result');


crapItBtn.addEventListener('click', function(){
  var result = addTwoNumbers(+num1Input.value, +num2Input.value  );
  resultInput.value = result;
});

clearBtn.addEventListener('click', function(){
  num1Input.value = "";
  num2Input.value = "";
  resultInput.value = "";
});

  var theme1 = document.querySelector('.theme-one');
  theme1.addEventListener('click', function(){
    document.body.style.backgroundColor = 'mistyrose';
  });

  var theme2 = document.querySelector('.theme-two');
  theme2.addEventListener('click', function(){
    document.body.style.backgroundColor = 'plum';
  });

  var theme3 = document.querySelector('.theme-three');
  theme3.addEventListener('click', function(){
    document.body.style.backgroundColor = 'crimson';
  });

  // var theme4 = document.querySelector('.theme-four');
  // theme4.addEventListener('click', function(){
  //   document.body.style.backgroundColor = 'mintcream';
  // });
  var changeBackground = function(event){
    document.body.style.backgroundColor = event.target.getAttribute('data-color');
  };

  var theme4 = document.querySelector('.theme-four');
  theme4.addEventListener('click', function(event){
    changeBackground(event);
  });
