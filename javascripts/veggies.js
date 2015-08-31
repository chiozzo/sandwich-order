define([], function() {
	var veggies = {
		"Lettuce": 0.25,
		"Tomato": 0.25,
		"Onion": 0.25,
		"Cucumber": 0.25,
		"Pickle": 0.25
	};

	//public interface is what is returned
	return {
		getVeggies: function() {
			return Object.keys(veggies);
		},

		addVeggie: function(veggieChosen) {
			return veggies[veggieChosen];
		}
	};
});