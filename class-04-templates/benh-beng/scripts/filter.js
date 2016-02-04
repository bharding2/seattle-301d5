'use stict';

$(function() {
  var template = Handlebars.compile($('#filter-template').text());

  var filter_data = {
    filters: [
      {filter_type: 'author'},
      {filter_type: 'category'}
    ]
  }
  $('#filters').append(template(filter_data));
});
