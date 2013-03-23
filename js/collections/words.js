define(["underscore", "backbone", "models/word"], function(_, Backbone, Word){
	'use strict';
<<<<<<< HEAD

	var Words = Backbone.Collection.extend({
		model: Word.Word
=======
	app.Words = Backbone.Collection.extend({
		model: app.Word
>>>>>>> df4976ca81681e058cc31a44c6581b09ee745690
	});  
	return {
         "Words": Words,
     };
});
