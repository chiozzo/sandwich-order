document.ready

  var finalPrice = 0;

  $("#meat-button").click(function() {
    var meatChosen = $("#meats").val();
    var meatPrice = sandwich.addMeat(meatChosen);

    $("#meat-type").append(meatChosen);
    $("#meat-price").append(meatPrice);


    finalPrice += meatPrice;
  })