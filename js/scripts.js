// BUSINESS-SIDE LOGIC //

function testInt(value) {
  if (value % 1 === 0) {
    return true;
  } else {
    return false;
  }
}













// USER INTERFACE LOGIC //

$(document).ready(function() {

  $("form#gimme-that-number").submit(function(event) {
    event.preventDefault();

    var userInput = Number($("#user-number").val());

    if (isNaN(userInput)) {
      $("#number-list").fadeOut();
      $("#not-an-int").fadeOut();
      $("#not-a-number").fadeIn();
    }
    else if (testInt(userInput) === false || userInput < 0) {
      console.log(userInput);
      $("#number-list").fadeOut();
      $("#not-a-number").fadeOut();
      $("#not-an-int").fadeIn();
    }
    else if (testInt(userInput) === true && userInput >= 0) {
      $("#not-a-number").fadeOut();
      $("#not-an-int").fadeOut();
      $("#number-list").fadeIn();
      $("#put-number-here").text(userInput);
    }


  });

});
