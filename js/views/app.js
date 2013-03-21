define(["jquery", "underscore", "backbone", "models/word", "collections/words"], function($, _, Backbone, Word, Words){
	'use strict';

	var AppView = Backbone.View.extend({
		el: $('#wordApp'),
		events: {
			'click button#search': 'search'
		},
		initialize: function(){
			_.bindAll(this, 'render', 'search', 'show'); // fixes loss of context for 'this' within methods

			this.words = new Words.Words();
			this.words.bind('add', this.show);

			this.render(); // not all views are self-rendering. This one is.
		},
		render: function(){
			$('#result', this.el).append("<ul></ul>");
		},
		search: function(){
			var word = new Word.Word();
			word.set({fra: 'hoge'});
			this.words.add(word);
		},
		show: function(word){
			$('#result ul', this.el).html('<li>'+word.get('jap')+': '+word.get('fra')+'</li>');
		}
	});
	return {
         "AppView": AppView,
     };
});