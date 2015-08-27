var sandwich = (function(sandwich){
	var veggies = {
		"Lettuce": 0.25,
		"Tomato": 0.25,
		"Onion": 0.25,
		"Cucumber": 0.25,
		"Pickle": 0.25
	};

	sandwich.getVeggies = function() {
		console.log("getVeggies run");
		return Object.keys(veggies);
	};

	sandwich.addVeggie = function(veggieChosen) {
		return veggies[veggieChosen];
	};

	return sandwich;

})(sandwich);