//Declare Variables
var totalPrice = 0;
var breads = sandwich.getBreads();
var cheeses = sandwich.getCheeses();
var condiments = sandwich.getCondiments();
var meats = sandwich.getMeats();
var veggies = sandwich.getVeggies();

var menuBread = $('<select id="breads">').appendTo('#bread');
var menuCheese = $('<select id="cheeses">').appendTo('#cheese');
var menuCondiment = $('<select id="condiments">').appendTo('#condiment');
var menuMeat = $('<select id="meats">').appendTo('#meat');
var menuVeggie = $('<select id="veggies">').appendTo('#veggie');

//create select menu in the dom and add Button BREAD
menuBread.append("<option selected disabled>Choose Your Bread</option>");
$(breads).each(function() {
  menuBread.append($("<option>").attr('value',this).text(this));
});
$("<button id='bread-button'>Add Bread</button>").appendTo("#bread");

//CHEESE
menuCheese.append("<option selected disabled>Choose Your Cheese</option>");
$(cheeses).each(function() {
  menuCheese.append($("<option>").attr('value',this).text(this));
});
$("<button id='cheese-button'>Add Cheese</button>").appendTo("#cheese");

//CONDIMENT
menuCondiment.append("<option selected disabled>Choose Your Condiment</option>");
$(condiments).each(function() {
  menuCondiment.append($("<option>").attr('value',this).text(this));
});
$("<button id='condiment-button'>Add Condiment</button>").appendTo("#condiment");

//MEAT
menuMeat.append("<option selected disabled>Choose Your Meat</option>");
$(meats).each(function() {
  menuMeat.append($("<option>").attr('value',this).text(this));
});
$("<button id='meat-button'>Add Meat</button>").appendTo("#meat");

//MEAT
menuVeggie.append("<option selected disabled>Choose Your Veggie</option>");
$(veggies).each(function() {
  menuVeggie.append($("<option>").attr('value',this).text(this));
});
$("<button id='veggie-button'>Add Veggie</button>").appendTo("#veggie");

//functionality and logic employed
//BREAD BUTTON
$("#bread-button").click(function() {
  var breadChosen = $("#breads").val();
  var breadPrice = sandwich.addBread(breadChosen);
  $("#bread-type").append("<p>Bread: " + breadChosen + "</p>");
  // $("#bread-price").append(breadPrice);
  totalPrice += breadPrice;
});

//CHEESE BUTTON
$("#cheese-button").click(function() {
  var cheeseChosen = $("#cheeses").val();
  var cheesePrice = sandwich.addCheese(cheeseChosen);
  $("#cheese-type").append("<p>Cheese: " + cheeseChosen + "</p>");
  // $("#cheese-price").append(cheesePrice);
  totalPrice += cheesePrice;
});

//CONDIMENT BUTTON
$("#condiment-button").click(function() {
  var condimentChosen = $("#condiments").val();
  var condimentPrice = sandwich.addCondiment(condimentChosen);
  $("#condiment-type").append("<p>Condiment: " + condimentChosen + "</p>");
  // $("#condiment-price").append(condimentPrice);
  totalPrice += condimentPrice;
});

//MEAT BUTTON
$("#meat-button").click(function() {
  var meatChosen = $("#meats").val();
  var meatPrice = sandwich.addMeat(meatChosen);
  $("#meat-type").append("<p>Meat: " + meatChosen + "</p>");
  // $("#meat-price").append(meatPrice);
  totalPrice += meatPrice;
});

//VEGGIE BUTTON
$("#veggie-button").click(function() {
  var veggieChosen = $("#veggies").val();
  var veggiePrice = sandwich.addVeggie(veggieChosen);
  $("#veggie-type").append("<p>Veggie: " + veggieChosen + "</p>");
  // $("#veggie-price").append(veggiePrice);
  totalPrice += veggiePrice;
});


//TOTAL AND APPEND
$("#sandwich-build").click(function() {
  $("<span>Your Total Cost is $" + totalPrice + "</span>").appendTo("#total");
});












