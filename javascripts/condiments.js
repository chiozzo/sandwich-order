define([], function() {
	var condiments = {
		"Oil": 0.50,
		"Vinegar": 0.50,
		"Marinara": 0.50,
		"Ranch": 0.50
	};

	//public interface is what is returned
	return {
		getCondiments: function() {
			return Object.keys(condiments);
		},

		addCondiment: function(condimentChosen) {
			return condiments[condimentChosen];
		}
	};
});