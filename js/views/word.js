var app = app || {};

$(function($){
	'use strict';

	app.WordView = Backbone.View.extend({
		tagName: 'li',
		events: {
			'click span.delete': 'remove'
		},
		initialize: function(){
			_.bindAll(this, 'render', 'unrender', 'remove'); // every function that uses 'this' as the current object should be in here
			this.model.bind('remove', this.unrender);
		},
		render: function(){
			$(this.el).html('<span>'+this.model.get('jap')+' '+this.model.get('fra')+'</span>  <span class="delete" style="cursor:pointer; color:red; font-family:sans-serif;">[delete]</span>');
			return this; // for chainable calls, like .render().el
		},
		unrender: function(){
			$(this.el).remove();
		},
		remove: function(){
			this.model.destroy();
		}
	});
});