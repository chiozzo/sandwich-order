var sandwich = (function() {

	return {
		arrayToDropdown: function(ingredientsArray){
			var selectMenu = "<select class='ingredient-menu'>";
			selectMenu += "<option selected>None</option>";
			ingredientsArray.forEach(function(ingredient) {
				selectMenu += "<option ";
				selectMenu += "value='";
				selectMenu += ingredient;
				selectMenu += "'>";
				selectMenu += ingredient;
				selectMenu += "</option>";
			});
			selectMenu += "</select>";
		$('#ingredient-selections').append(selectMenu);
		}
	}
})();