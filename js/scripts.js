$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    let array = $("#sentence").val().split(" ");
    let newArray = [];
    array.forEach(function(word) {
      if (word.length >= 3) {
        newArray.push(word);
      }
    })
    newArray.reverse();
    result = newArray.join(' ');
    $("div").text(result);
  });
});