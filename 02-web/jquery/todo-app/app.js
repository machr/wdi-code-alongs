var $todoList = $('.todo-list');
var $doneList = $('.done-list');
var addBtn = $('.addBtn');
var inputTag = $('.input');

//event delegation
var completeItem = function(event) {
  var $listItem = $(event.target);
  var text = $listItem.text();
  $listItem.remove();
  var $newEl = $('<li>').text(text);
  $newEl.addClass('completed');
  $doneList.append($newEl);
};

var unCompleteItem = function(event) {
  var $listItem = $(event.target);
  $listItem.removeClass('completed');
  $todoList.append($listItem);
};

$($todoList).on('click', 'li', completeItem);
$($doneList).on('click', 'li', unCompleteItem);


addBtn.on('click', function(){
  var $newListItem = $('<li>').text(inputTag.val());
  $todoList.append ( $newListItem );
  inputTag.val('');
});
