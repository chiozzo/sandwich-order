var sandwich = (function(sandwich){
	var meats = {
		"Ham": "2.00",
		"Turkey": "2.00",
		"Chicken": "2.00",
		"Meatballs": "2.00",
		"Salami": "2.00",
		"Bacon": "2.00"
	};

	sandwich.getMeats = function() {
		console.log("getMeats run");
		return Object.keys(meats);
	};

	sandwich.addMeat = function (ingredient) {
		return "addMeat run";
		//get value of meat drop down
		//append text of corresponding value to "orderslip" div
	};

	return sandwich;

})(sandwich);