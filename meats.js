var sandwich = (function(sandwich){
	var meats = {
		"Ham": 2.00,
		"Turkey": 2.00,
		"Chicken": 2.00,
		"Meatballs": 2.00,
		"Salami": 2.00,
		"Bacon": 2.00
	};

	sandwich.getMeats = function() {
		console.log("getMeats run");
		return Object.keys(meats);
	};

	sandwich.addMeat = function (meatChosen) {
		return meats[meatChosen];
	};

	return sandwich;

})(sandwich);