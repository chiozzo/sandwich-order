var sandwich = (function(sandwich){
	var breads = {
		"White": 0.50,
		"Wheat": 0.50,
		"Whole Grain": 0.50,
		"Cheddar": 0.50,
		"Italian Herb": 0.50,
		"Rye": 0.50,
		"French": 0.50,
		"Sourdough": 0.50
	};

	sandwich.getBreads = function() {
		console.log("getBreads run");
		return Object.keys(breads);
	};

	sandwich.addBread = function(breadChosen) {
		return breads[breadChosen];
	};

	return sandwich;

})(sandwich);