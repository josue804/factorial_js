var factorial = function (number) {
  if (number === 1) {
    return 1;
  }

  return result = number * factorial(number - 1);



};

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var input = parseInt($("input#number").val());
    var result = factorial(input);

    $(".result").text(result);
    $(".result").show();
    event.preventDefault();
  });
});
