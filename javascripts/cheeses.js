define([], function(cheeses){

	var cheeses = {
		"Muenster": 1.00,
		"Cheddar": 1.00,
		"Provolone": 1.00,
		"American": 1.00,
		"Swiss": 1.00,
		"Pepperjack": 1.00
	};

	cheeses.getCheeses = function() {
		console.log("getCheeses run");
		return Object.keys(cheeses);
	};

	cheeses.addCheese = function(cheeseChosen) {
		return cheeses[cheeseChosen];
	};

	return cheeses;

});