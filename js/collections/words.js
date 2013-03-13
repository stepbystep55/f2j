var app = app || {};

$(function($){
	'use strict';
	app.Words = Backbone.Collection.extend({
		model: app.Word
	});  
});
