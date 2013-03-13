var app = app || {};

$(function($){
	'use strict';

	app.AppView = Backbone.View.extend({
		el: $('#wordApp'),
		events: {
			'click button#search': 'search'
		},
		initialize: function(){
			_.bindAll(this, 'render', 'search', 'showWord'); // fixes loss of context for 'this' within methods

			app.words = new app.Words();
			app.words.bind('add', this.showWord);

			this.render(); // not all views are self-rendering. This one is.
		},
		render: function(){
			var self = this;
			_(app.words.models).each(function(word){
				self.showWord(word);
			}, this);
		},
		search: function(){
			var word = new app.Word();
			word.set({fra: 'hoge'});
			app.words.add(word);
		},
		showWord: function(word){
			var wordView = new app.WordView({model: word});
			$('#result ul', this.el).append(wordView.render().el);
		}
	});
});