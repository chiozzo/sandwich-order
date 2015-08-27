document.ready

  var finalPrice = 0;

  $("#cheese-button").click(function() {
    var meatChosen = $("#cheese-select").val();
    var meatPrice = sandwich.getMeat(meatChosen);

    $("#meat-type").append(meatChosen);
    $("#meat-price").append(meatPrice);


    finalPrice += meatPrice;
  })