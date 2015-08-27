var breads = sandwich.getBreads();

var menuBread = $('<select id="breads">').appendTo('#ingredients');

// menuBread.append("<option selected disabled value='default-value'>Choose Your Bread</option>");
$(breads).each(function() {
  menuBread.append($("<option>").attr('value',this).text(this));
});

$("#sandwich-build").on("click", sandwich.addBread);