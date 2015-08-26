var sandwich = (function(){

	return {
		arrayToDropdown: function(ingredientsArray){
			var selections = $('#ingredient-selections');
			var selectMenu = "<select>";
			selectMenu += "<option selected>None</option>";
			ingredientsArray.forEach(function(ingredient){
				this.attr('value',this.val);
				this.text(this.text);
				selectMenu += "<option ";
				selectMenu += "value='";
				selectMenu += ingredient;
				selectMenu += "'>"
				selectMenu += ingredient;
				selectMenu += "</option>"
				console.log(selectMenu);
			});
		selectMenu += "</select>";
		selections.append(selectMenu);
		}
	}
})();

var breadsArray = sandwich.getBread();
console.log(breadsArray);