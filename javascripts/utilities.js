define([], function() {

	return {
		capitalize: function(word) {
			return word.substring(0,1).toUpperCase() + word.substring(1);
		},
		reverse: function(word) {
			return word.split("").reverse().join("");
		}
	};

});