function cardsIndex(){
  // get the data

  // use the template to render html

  // attach event handlers

  var apiUrl = '/api/cards';
  var indexTemplate = Handlebars.compile( $('#index-template').html() );
  var cardTemplate = Handlebars.compile( $('#card-template').html() );
  $.ajax({ url: apiUrl }).done(renderIndex);

  function renderIndex(cards){
    console.log(cards);

    var html = indexTemplate();
    $('#app').append(html);

    cards.forEach(function(card){
      var html = cardTemplate(card);
      $('.container').append(html);
    });

    $('.container').on('click', '.delete-btn', deleteCard);
    // $('.container').on('click', '.delete-btn', deleteCard);

    function deleteCard(event){
      var cardId = $(this).closest('.card').data('id');
      $.ajax({
        url: '/api/cards/' + cardId,
        method: 'delete'
      }).done(function(){
        $(event.target).closest('.card').fadeOut(500, function() {
          $(event.target).closest('.card').remove();
        });
      });

    }


  } // END renderIndex
}

$(document).ready(function(){

  cardsIndex();

});

//
//
//   $('.create-card-action').on('click', function(event) {
//     event.preventDefault();
//
//     $.ajax({
//       url: '/api/cards',
//       method: 'post',
//       data: {
//         name: $('.new-card-name').val(),
//         image_url: $('.new-card-image-url').val()
//       }
//     }). done( function(card) {
//       console.log(card);
//       var source = $('#card-template').html();
//       var compiledTemplate = Handlebars.compile(source);
//
//       var compiledHtml = compiledTemplate( card );
//       $('.container').append(compiledHtml);
//     }); // End .done
//
//   }); // End create-card-action click handler
//   $.ajax({
//     url: '/api/cards',
//   })
//   .done(function(response){
//     // console.log(response);
//     var shuffledCards = _.shuffle(response);
//
//     shuffledCards.forEach( function(card) {
//
//       var source = $('#card-template').html();
//       var compiledTemplate = Handlebars.compile(source);
//
//       var compiledHtml = compiledTemplate( card );
//       $('.container').append(compiledHtml);
//     }); //End .forEach method
//
//     $('.delete-btn').on('click', function(event){
//       var cardId = $(event.target).closest('.card').data('id');
//       $.ajax({
//         url: '/api/cards/' + cardId,
//         method: 'delete'
//       }).done(function() {
//         $(event.target).closest('.card').fadeOut(500, function() {
//           $(event.target).closest('.card').remove();
//         });
//       });
//     });
//
//   }); //End .done method
//
//   $('.container').on('click', '.edit-btn', function(event){
//     $('.modal-wrapper').addClass('show');
//     var cardId = $(event.target).closest('.card').data('id');
//
//     $('.modal-wrapper').on('click', '.modal-close-btn', function(event){
//       $('.modal-wrapper').removeClass('show');
//     });
//
//
//     $('#edit-card').on('submit', function(event){
//       event.preventDefault();
//       console.log(cardId);
//       $.ajax({
//         url: '/api/cards/' + cardId,
//         data: {
//           name: $('.edit-card-name').val(),
//           image_url: $('.edit-card-image-url').val()
//         },
//         method: 'PUT'
//       }).done(function(card){
//         console.log(card);
//       });
//     });
//   });
// }); // End Document.ready
