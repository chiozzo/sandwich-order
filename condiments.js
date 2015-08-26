var sandwich = (function(sandwich){
	var condiments = {
		"Oil": "0.50",
		"Vinegar": "0.50",
		"Marinara": "0.50",
		"Ranch": "0.50"
	};

	sandwich.getCondiments = function() {
		console.log("getCondiments run");
		return Object.keys(condiments);
	};

	sandwich.addCondiment = function(ingredient) {
		return "addCondiment run";
		//get value of condiment drop down
		//append text of corresponding value to "orderslip" div
	};

	return sandwich;

})(sandwich);