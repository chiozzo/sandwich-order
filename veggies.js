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

	sandwich.addVeggie = function() {
		//get value of veggies drop down
		console.log("addVeggie run");
		var selection = $("#veggies").val();
		console.log(selection);
		//append value to #sandwich
		$("#veggie-type").append(selection);
		$("#veggie-price").append(veggies[selection]);
	};

	return sandwich;

})(sandwich);