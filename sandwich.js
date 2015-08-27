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

menuBread.append("<option selected disabled>Choose Your Bread</option>");
$(breads).each(function() {
  menuBread.append($("<option>").attr('value',this).text(this));
});
$("<button id='bread-button'>Add Bread</button>").appendTo("#bread");
menuCheese.append("<option selected disabled>Choose Your Cheese</option>");
$(cheeses).each(function() {
  menuCheese.append($("<option>").attr('value',this).text(this));
});
$("<button id='cheese-button'>Add Cheese</button>").appendTo("#cheese");
menuCondiment.append("<option selected disabled>Choose Your Condiment</option>");
$(condiments).each(function() {
  menuCondiment.append($("<option>").attr('value',this).text(this));
});
$("<button id='condiment-button'>Add Condiment</button>").appendTo("#condiment");
menuMeat.append("<option selected disabled>Choose Your Meat</option>");
$(meats).each(function() {
  menuMeat.append($("<option>").attr('value',this).text(this));
});
$("<button id='meat-button'>Add Meat</button>").appendTo("#meat");
menuVeggie.append("<option selected disabled>Choose Your Veggie</option>");
$(veggies).each(function() {
  menuVeggie.append($("<option>").attr('value',this).text(this));
});
$("<button id='veggie-button'>Add Veggie</button>").appendTo("#veggie");

$("#bread-button").on("click", sandwich.addBread);
$("#cheese-button").on("click", sandwich.addCheese);

$("#condiment-button").click(function() {
  var condimentChosen = $("#condiments").val();
  var condimentPrice = sandwich.addCondiment(condimentChosen);
  $("#condiment-type").append(condimentChosen);
  $("#condiment-price").append(condimentPrice);
  totalPrice += condimentPrice;
});

$("#meat-button").click(function() {
  var meatChosen = $("#meats").val();
  var meatPrice = sandwich.addMeat(meatChosen);
  $("#meat-type").append(meatChosen);
  $("#meat-price").append(meatPrice);
  totalPrice += meatPrice;
});

$("#veggie-button").on("click", sandwich.addVeggie);
