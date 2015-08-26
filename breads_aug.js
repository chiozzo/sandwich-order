var sandwich = (function(sandwich){
	var breads = {
		"white": "0.50",
		"wheat": "0.50",
		"whole grain": "0.50",
		"cheddar bread": "0.50",
		"italian herb": "0.50",
		"rye": "0.50",
		"french": "0.50",
		"sourdough": "0.50"
	};

	sandwich.getBread = function() {
		console.log("get bread run");
		var breadsArray = Object.keys(breads);
		return breadsArray;
	};
	sandwich.addBread = function(ingredient) {
		return "add bread run";
		//get value of bread drop down
		//append text of corresponding value to "created-order" div
		}
	return sandwich;

})(sandwich);