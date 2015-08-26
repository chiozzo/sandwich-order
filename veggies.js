var sandwich = (function(sandwich){
	var veggies = {
		"Lettuce": "0.25",
		"Tomato": "0.25",
		"Onion": "0.25",
		"Cucumber": "0.25",
		"Pickle": "0.25"
	};

	sandwich.getVeggies = function() {
		console.log("getVeggies run");
		return Object.keys(veggies);
	};

	sandwich.addVeggie = function(ingredient) {
		return "addVeggie run";
		//get value of veggie drop down
		//append text of corresponding value to "orderslip" div
	};

	return sandwich;

})(sandwich);