define(["jquery", "underscore", "backbone", "models/word", "collections/words"], function($, _, Backbone, Word, Words){
	'use strict';

	var AppView = Backbone.View.extend({
		el: $('#wordApp'),
		events: {
			'click button#search': 'search'
		},
		initialize: function(){
			_.bindAll(this, 'render', 'search', 'showWord'); // fixes loss of context for 'this' within methods

<<<<<<< HEAD
			this.words = new Words.Words();
			this.words.bind('add', this.show);
=======
			app.words = new app.Words();
			app.words.bind('add', this.showWord);
>>>>>>> df4976ca81681e058cc31a44c6581b09ee745690

			this.render(); // not all views are self-rendering. This one is.
		},
		render: function(){
			var self = this;
			_(app.words.models).each(function(word){
				self.showWord(word);
			}, this);
		},
		search: function(){
<<<<<<< HEAD
			var word = new Word.Word();
			word.set({fra: 'hoge'});
			this.words.add(word);
		},
		show: function(word){
			$('#result ul', this.el).html('<li>'+word.get('jap')+': '+word.get('fra')+'</li>');
=======
			var word = new app.Word();
			word.set({fra: 'hoge'});
			app.words.add(word);
		},
		showWord: function(word){
			var wordView = new app.WordView({model: word});
			$('#result ul', this.el).append(wordView.render().el);
>>>>>>> df4976ca81681e058cc31a44c6581b09ee745690
		}
	});
	return {
         "AppView": AppView,
     };
});