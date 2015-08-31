define([], function(veggies){

	var veggies = {
		"Lettuce": 0.25,
		"Tomato": 0.25,
		"Onion": 0.25,
		"Cucumber": 0.25,
		"Pickle": 0.25
	};

	veggies.getVeggies = function() {
		console.log("getVeggies run");
		return Object.keys(veggies);
	};

	veggies.addVeggie = function(veggieChosen) {
		return veggies[veggieChosen];
	};

	return veggies;

});