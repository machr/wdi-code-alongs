// console.log('fun with functions!');
var letThereBeLight = function() {
  // classList.toggle will check if the docment.body has a class of 'torch'.
    // if it doesn't have the class, it will apply class of torch.
    //if the class is already on, it will remove that class
    // https://developer.mozilla.org/en/docs/Web/API/Element/classList
  document.body.classList.toggle( 'torch' );
   //document.body.style.backgroundColor = "yellow";
};


// added the event listener to the document itself so that the click can be anywhere on the page
// if it was document.body - the click would only work if it was on a html element (like h1, div, h2) on the page.
document.addEventListener('click', letThereBeLight);
