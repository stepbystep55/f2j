define(["underscore", "backbone", "models/word"], function(_, Backbone, Word){
	'use strict';

	var Words = Backbone.Collection.extend({
		model: Word.Word
	});  
	return {
         "Words": Words,
     };
});
