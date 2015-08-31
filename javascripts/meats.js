define([], function() {
	var meats = {
		"Ham": 2.00,
		"Turkey": 2.00,
		"Chicken": 2.00,
		"Meatballs": 2.00,
		"Salami": 2.00,
		"Bacon": 2.00
	};

	//public interface is what is returned
	return {
		getMeats: function() {
			return Object.keys(meats);
		},

		addMeat: function (meatChosen) {
			return meats[meatChosen];
		}
	};
});