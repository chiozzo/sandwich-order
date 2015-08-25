var breads = [
  { val : "none", text : "None"},
  { val : "white", text : "White"},
  { val : "wheat", text : "Wheat"},
  { val : "rye", text : "Rye"},
  { val : "french", text : "French"}
  ];
// var meats = ["Ham", "Turkey", "Salami", "Bacon", "Pepperoni", "Grilled Chicken"];
// var cheeses = ["Cheddar", "Swiss", "American", "Provolone", "Muenster"];
// var veggies = [];

var sel = $('<select>').appendTo('body');
sel.append("<option selected disabled>Choose Your Bread</option>");
$(breads).each(function() {
 sel.append($("<option>").attr('value',this.val).text(this.text));
});