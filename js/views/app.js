var app = app || {};

$(function($){
	'use strict';

	app.AppView = Backbone.View.extend({
		el: $('#wordApp'),
		events: {
			'click button#search': 'search'
		},
		initialize: function(){
			_.bindAll(this, 'render', 'search', 'show'); // fixes loss of context for 'this' within methods

			app.words = new Words();
			app.words.bind('add', this.show);

			this.render(); // not all views are self-rendering. This one is.
		},
		render: function(){
			$('#result', this.el).append("<ul></ul>");
		},
		search: function(){
			var word = new Word();
			word.set({fra: 'hoge'});
			app.words.add(word);
		}
		show: function(word){
			$('#result ul', this.el).html('<li>'+word.get('jap')+': '+word.get('fra')+'</li>');
		}
	});
});