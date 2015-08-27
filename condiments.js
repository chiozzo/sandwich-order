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

	sandwich.addCondiment = function() {
		//get value of condiment drop down
		console.log("addCondiment run");
		var selection = $("#condiments").val();
		console.log(selection);
		//append value to #sandwich
		$("#condiment-type").append(selection);
		$("#condiment-price").append(condiments[selection]);
	};

	return sandwich;

})(sandwich);