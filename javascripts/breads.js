define([], function() {
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

	//public interface is what is returned
	return {
		getBreads: function() {
			return Object.keys(breads);
		},

		addBread: function(breadChosen) {
			return breads[breadChosen];
		}
	};
});