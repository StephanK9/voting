$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#vote').show();
  } else if (age === 18) {
    alert("Here's some information that might help guide your first vote.");
    $('#youngvote').show();
  } else {
    $('#under-18').show();
  }
});
