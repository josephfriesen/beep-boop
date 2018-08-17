// BUSINESS-SIDE LOGIC //















// USER INTERFACE LOGIC //

$(document).ready(function() {

  $("form#gimme-that-number").submit(function(event) {
    event.preventDefault();

    var userNumber = $("#user-number").val();
    console.log(userNumber);
  });

});
