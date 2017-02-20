// console.log('connected');
var listItem = document.querySelector('li');
var list = document.querySelector('ul');

var addClass = function(element, className){
  element.className += (' ' + className);
};
// var removeClass = function(element, className){
//   element.className
//     .split(' ')
//     .filter( function(item){
//       if (item !== className){
//         return true;
//       }
//     }).join(' ');
// };

// Search for Buttton
var addBtn = document.querySelector('.addBtn');
var inputField = document.querySelector('.input-text');
inputField.addEventListener('keypress', function(event){
  if (event.keyCode == 13) {
  addListItem();
  inputField.value = '';
  }
});

var addListItem = function(){
  var listItem = document.createElement('li');
  var listItemText = document.querySelector('.input-text').value;
  listItem.textContent = listItemText;
  document.querySelector('.todo').appendChild(listItem);
};


/*****
  TO-DO:
  class toggle doesn't work
*****/
list.addEventListener('click', function(event){
  if (event.target.tagName == 'LI') {
      event.target.classList.toggle('completed');
      // console.log('clicked: ' + event.target.tagName);
  }
});
