var sandwich = (function(sandwich){
	var cheeses = {
		"Muenster": "1.00",
		"Cheddar": "1.00",
		"Provolone": "1.00",
		"American": "1.00",
		"Swiss": "1.00",
		"Pepperjack": "1.00"
	};

	sandwich.getCheeses = function() {
		console.log("getCheeses run");
		return Object.keys(cheeses);
	};

	sandwich.addCheese = function(ingredient) {
		return "addCheese run";
		//get value of cheese drop down
		//append text of corresponding value to "orderslip" div
	};

	return sandwich;

})(sandwich);