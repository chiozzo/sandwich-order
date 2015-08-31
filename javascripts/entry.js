requirejs.config({
	baseURL: "./javascripts",
  paths:{
  	"jquery": "../bower_components/jquery/dist/jquery.min"
  }

});

require(["jquery", "main", "breads", "cheeses", "meats", "veggies", "condiments"], function($, main, breads, cheeses, meats, veggies, condiments) {



});

