define(["underscore", "backbone"], function(_, Backbone){
	'use strict';

	var Word = Backbone.Model.extend({
		defaults: {
	    	jap: 'こんにちは',
	    	fra: 'bonjours'
		}
	});  
	return {
         "Word": Word
     };
});
	