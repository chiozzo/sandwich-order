var sandwich = (function(sandwich){
	var condiments = {
		"Oil": 0.50,
		"Vinegar": 0.50,
		"Marinara": 0.50,
		"Ranch": 0.50
	};

	sandwich.getCondiments = function() {
		console.log("getCondiments run");
		return Object.keys(condiments);
	};

	sandwich.addCondiment = function(condimentChosen) {
		return condiments[condimentChosen];
	};

	return sandwich;

})(sandwich);