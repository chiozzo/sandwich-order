requirejs.config({
  baseUrl: "./javascripts",
  paths: {
    "jquery" : "../bower_components/jquery/dist/jquery.min"
  }
});

require(["jquery", "utilities", "sandwichMaker"], function($, utilities, maker) {
  console.log("utilities", utilities);
  var text = "umbrella";
  console.log("maker", maker);
  console.log("reverse text", utilities.reverse(text));

});

