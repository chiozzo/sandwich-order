// var sandwich = (function() {


// })();


var breads = [
      { val : "none", text : "None"},
      { val : "white", text : "White"},
      { val : "wholeGrain", text : "Whole Grain"},
      { val : "cheddarBread", text : "Cheddar Bread"},
      { val : "italianHerb", text : "Italian Herb"},
      { val : "rye", text : "Rye"},
      { val : "french", text : "French"},
      { val : "sourdough", text : "Sourdough"}
    ],
  meats = [
      {val : "none", text: "None"},
      {val : "ham", text: "Ham"},
      {val : "turkey", text: "Turkey"},
      {val : "chicken", text: "Chicken"},
      {val : "salami", text: "Salami"},
      {val : "bacon", text: "Bacon"}
  ],
  cheeses = [
      {val : "none", text: "None"},
      {val : "muenster", text: "Muenster"},
      {val : "cheddar", text: "Cheddar"},
      {val : "provolone", text: "Provolone"},
      {val : "american", text: "American"},
      {val : "swiss", text: "Swiss"},
      {val : "pepperjack", text: "Pepperjack"}
  ],
  veggies = [
      {val : "none", text: "None"},
      {val : "lettuce", text: "Lettuce"},
      {val : "tomato", text: "Tomato"},
      {val : "onion", text: "Onion"},
      {val : "cucumber", text: "Cucumber"},
      {val : "pickle", text: "Pickle"}
  ],
  sauces = [
      {val : "none", text: "None"},
      {val : "oil", text: "Oil"},
      {val : "vinegar", text: "Vinegar"},
      {val : "marinara", text: "Marinara"},
      {val : "ranch", text: "Ranch"},
      {val : "mayo", text: "Mayo"}
  ];

var menuBread = $('<select>').appendTo('#ingredients'),
    menuMeat = $('<select>').appendTo('#ingredients'),
    menuCheese = $('<select>').appendTo('#ingredients'),
    menuVeggie = $('<select>').appendTo('#ingredients'),
    menuSauce = $('<select>').appendTo('#ingredients');

menuBread.append("<option selected disabled>Choose Your Bread</option>");
$(breads).each(function() {
  menuBread.append($("<option>").attr('value',this.val).text(this.text));
});

menuMeat.append("<option selected disabled>Choose Your Meat</option>");
$(meats).each(function() {
  menuMeat.append($("<option>").attr('value',this.val).text(this.text));
});

menuCheese.append("<option selected disabled>Choose Your Cheese</option>");
$(cheeses).each(function() {
  menuCheese.append($("<option>").attr('value',this.val).text(this.text));
});

menuVeggie.append("<option selected disabled>Choose Your Veggies</option>");
$(veggies).each(function() {
  menuVeggie.append($("<option>").attr('value',this.val).text(this.text));
});

menuSauce.append("<option selected disabled>Choose Your Sauces</option>");
$(sauces).each(function() {
  menuSauce.append($("<option>").attr('value',this.val).text(this.text));
});









