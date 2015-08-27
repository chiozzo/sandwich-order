var breads = sandwich.getBreads();
var cheeses = sandwich.getCheeses();
var condiments = sandwich.getCondiments();
var meats = sandwich.getMeats();
var veggies = sandwich.getVeggies();

var menuBread = $('<select id="breads">').appendTo('#ingredients');
var menuCheese = $('<select id="cheeses">').appendTo('#ingredients');
var menuCondiment = $('<select id="condiments">').appendTo('#ingredients');
var menuMeat = $('<select id="meats">').appendTo('#ingredients');
var menuVeggie = $('<select id="veggies">').appendTo('#ingredients');

menuBread.append("<option selected disabled>Choose Your Bread</option>");
$(breads).each(function() {
  menuBread.append($("<option>").attr('value',this).text(this));
});
menuCheese.append("<option selected disabled>Choose Your Cheese</option>");
$(cheeses).each(function() {
  menuCheese.append($("<option>").attr('value',this).text(this));
});
menuCondiment.append("<option selected disabled>Choose Your Condiment</option>");
$(condiments).each(function() {
  menuCondiment.append($("<option>").attr('value',this).text(this));
});
menuMeat.append("<option selected disabled>Choose Your Meat</option>");
$(meats).each(function() {
  menuMeat.append($("<option>").attr('value',this).text(this));
});
menuVeggie.append("<option selected disabled>Choose Your Veggie</option>");
$(veggies).each(function() {
  menuVeggie.append($("<option>").attr('value',this).text(this));
});

$("#sandwich-build").on("click", sandwich.addBread);
$("#sandwich-build").on("click", sandwich.addCheese);
$("#sandwich-build").on("click", sandwich.addCondiment);
$("#sandwich-build").on("click", sandwich.addMeat);
$("#sandwich-build").on("click", sandwich.addVeggie);
