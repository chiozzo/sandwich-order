define([], function(condiments){

	var condiments = {
		"Oil": 0.50,
		"Vinegar": 0.50,
		"Marinara": 0.50,
		"Ranch": 0.50
	};

	condiments.getCondiments = function() {
		console.log("getCondiments run");
		return Object.keys(condiments);
	};

	condiments.addCondiment = function(condimentChosen) {
		return condiments[condimentChosen];
	};

	return condiments;

});