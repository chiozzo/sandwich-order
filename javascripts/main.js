define(["jquery", "breads", "meats", "cheeses", "veggies", "condiments"], function($, breads, meats, cheeses, veggies, condiments) {
  //Declare Variables
  var totalPrice = 0;

  var breadsArray = breads.getBreads();
  var cheesesArray = cheeses.getCheeses();
  var condimentsArray = condiments.getCondiments();
  var meatsArray = meats.getMeats();
  var veggiesArray = veggies.getVeggies();

  var menuBread = $('<select id="breads">').appendTo('#bread');
  var menuCheese = $('<select id="cheeses">').appendTo('#cheese');
  var menuCondiment = $('<select id="condiments">').appendTo('#condiment');
  var menuMeat = $('<select id="meats">').appendTo('#meat');
  var menuVeggie = $('<select id="veggies">').appendTo('#veggie');

  //create select menu in the dom and add Button BREAD
  menuBread.append("<option selected disabled>Choose Your Bread</option>");
  $(breadsArray).each(function() {
    menuBread.append($("<option>").attr('value',this).text(this));
  });
  $("<button id='bread-button'>Add Bread</button>").appendTo("#bread");

  //CHEESE
  menuCheese.append("<option selected disabled>Choose Your Cheese</option>");
  $(cheesesArray).each(function() {
    menuCheese.append($("<option>").attr('value',this).text(this));
  });
  $("<button id='cheese-button'>Add Cheese</button>").appendTo("#cheese");

  //CONDIMENT
  menuCondiment.append("<option selected disabled>Choose Your Condiment</option>");
  $(condimentsArray).each(function() {
    menuCondiment.append($("<option>").attr('value',this).text(this));
  });
  $("<button id='condiment-button'>Add Condiment</button>").appendTo("#condiment");

  //MEAT
  menuMeat.append("<option selected disabled>Choose Your Meat</option>");
  $(meatsArray).each(function() {
    menuMeat.append($("<option>").attr('value',this).text(this));
  });
  $("<button id='meat-button'>Add Meat</button>").appendTo("#meat");

  //VEGGIE
  menuVeggie.append("<option selected disabled>Choose Your Veggie</option>");
  $(veggiesArray).each(function() {
    menuVeggie.append($("<option>").attr('value',this).text(this));
  });
  $("<button id='veggie-button'>Add Veggie</button>").appendTo("#veggie");

  //functionality and logic employed
  //BREAD BUTTON
  $("#bread-button").click(function() {
    var breadChosen = $("#breads").val();
    var breadPrice = breads.addBread(breadChosen);
    $("#bread-type").append("<p>Bread: " + breadChosen + "</p>");
    // $("#bread-price").append(breadPrice);
    totalPrice += breadPrice;
  });

  //CHEESE BUTTON
  $("#cheese-button").click(function() {
    var cheeseChosen = $("#cheeses").val();
    var cheesePrice = cheeses.addCheese(cheeseChosen);
    $("#cheese-type").append("<p>Cheese: " + cheeseChosen + "</p>");
    // $("#cheese-price").append(cheesePrice);
    totalPrice += cheesePrice;
  });

  //CONDIMENT BUTTON
  $("#condiment-button").click(function() {
    var condimentChosen = $("#condiments").val();
    var condimentPrice = condiments.addCondiment(condimentChosen);
    $("#condiment-type").append("<p>Condiment: " + condimentChosen + "</p>");
    // $("#condiment-price").append(condimentPrice);
    totalPrice += condimentPrice;
  });

  //MEAT BUTTON
  $("#meat-button").click(function() {
    var meatChosen = $("#meats").val();
    var meatPrice = meats.addMeat(meatChosen);
    $("#meat-type").append("<p>Meat: " + meatChosen + "</p>");
    // $("#meat-price").append(meatPrice);
    totalPrice += meatPrice;
  });

  //VEGGIE BUTTON
  $("#veggie-button").click(function() {
    var veggieChosen = $("#veggies").val();
    var veggiePrice = veggies.addVeggie(veggieChosen);
    $("#veggie-type").append("<p>Veggie: " + veggieChosen + "</p>");
    // $("#veggie-price").append(veggiePrice);
    totalPrice += veggiePrice;
  });

  //TOTAL AND APPEND
  $("#sandwich-build").click(function() {
    $("#total").text("Your Total Cost is $" + totalPrice);
  });

});