define([], function(meats){

	var meats = {
		"Ham": 2.00,
		"Turkey": 2.00,
		"Chicken": 2.00,
		"Meatballs": 2.00,
		"Salami": 2.00,
		"Bacon": 2.00
	};

	meats.getMeats = function() {
		console.log("getMeats run");
		return Object.keys(meats);
	};

	meats.addMeat = function (meatChosen) {
		return meats[meatChosen];
	};

	return meats;

});