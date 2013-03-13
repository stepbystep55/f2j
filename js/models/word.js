var app = app || {};

$(function($){
	'use strict';
	app.Word = Backbone.Model.extend({
		defaults: {
	    	jap: 'こんにちは',
	    	fra: 'bonjours'
		}
	});  
});
