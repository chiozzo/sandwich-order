define([], function(condiments){

	var condiments = {
		"Oil": 0.50,
		"Vinegar": 0.50,
		"Marinara": 0.50,
		"Ranch": 0.50
	};

	return {
		getCondiments : function() {
			console.log("getCondiments run");
			return Object.keys(condiments);
		},

		addCondiment : function(condimentChosen) {
			return condiments[condimentChosen];
		}
	};
});