define([], function() {
	var cheeses = {
		"Muenster": 1.00,
		"Cheddar": 1.00,
		"Provolone": 1.00,
		"American": 1.00,
		"Swiss": 1.00,
		"Pepperjack": 1.00
	};

	//public interface is what is returned
	return {
		getCheeses: function() {
			return Object.keys(cheeses);
		},

		addCheese: function(cheeseChosen) {
			return cheeses[cheeseChosen];
		}
	};
});