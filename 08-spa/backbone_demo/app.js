var QuoteItemView = Backbone.View.extend({
  template: Handlebars.compile( $('#quote-item-template').html() ),
  events: {
    'click p': 'markAsDone',
    'click h2': 'changeBackgroundColor'
  },
  
  changeBackgroundColor: function(){
    this.$el.find('h2').css('background-color', 'yellow');
  },

  markAsDone: function(){
    this.$el.find('p').css( 'text-decoration', 'line-through' );
  },

  render: function() {

    var html = this.template(this.model);
    this.$el.html( html );
  }
});

$.ajax({
  url: 'http://omdbapi.com',
  data: {
    s: 'Jaws'
  }
}).done(function(response){
  var movies = response.Search;
  // console.log(response.Search);

  movies.forEach(function(movie){
    var view = new QuoteItemView({ model: movie }); //model: is basically the object we get back from the response in the forEach method.
    view.render();
    $('#app').append(view.el);
  });

});
