console.log('connected');

var listItem = document.querySelector('li');
var list = document.querySelector('ul');

// event delegation
list.addEventListener('click', function(event){
  // console.log('clicked');
  // cross out if only a list item is clicked on
  // console.log(event.target.tagName);
  if (event.target.tagName == 'LI') {
    event.target.classList.toggle('completed');
  }
});

// Search for Buttton
var addBtn = document.querySelector('.addBtn');
// button listen on clicked
// addBtn.addEventListener('click', function(){
//   addListItem();
// });
var inputField = document.querySelector('.input-text');
inputField.addEventListener('keypress', function(event){
  if (event.keyCode == 13) {
  addListItem();
  inputField.value = '';
  }
});

function addListItem(){
  var listItem = document.createElement('li');
  var listItemText = document.querySelector('.input-text').value;
  listItem.textContent = listItemText;
  document.querySelector('.todo').appendChild(listItem);
}

// create a new DOM element - specially a new list item with the contents from the input
