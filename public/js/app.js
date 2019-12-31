$("#complete").on("click", function(event) {
  event.preventDefault();

  const gunCount = parseInt(
    $("#gun")
      .val()
      .trim()
  );

  console.log(gunCount);

  const valueArr = $(".form-control");

  console.log(valueArr);

  const order = {};

  for (let i = 0; i < valueArr.length; i++) {
    if (valueArr[i].val()) {
      order[valueArr[i].id] = parseInt(valueArr[i].val().trim());
    }
  }
  $.post("/api/products", order, function(response) {});
});
