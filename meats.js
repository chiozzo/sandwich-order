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

	sandwich.addMeat = function () {
		//get value of meat drop down
		console.log("addMeat run");
		var selection = $("#meats").val();
		console.log(selection);
		//append value to #sandwich
		$("#meat-type").append(selection);
		$("#meat-price").append(meats[selection]);
	};

	return sandwich;

})(sandwich);