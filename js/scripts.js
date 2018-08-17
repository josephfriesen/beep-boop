// BUSINESS-SIDE LOGIC //

function testInt(value) {
  if (value % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

function divisibleByThree(value) {
  if (value % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

function checkForDigitZero(value) {
  var zeros = false;
  var string = value.toString();
  var arr = [];
  for (var i = 0; i < string.length; i++) {
    arr.push(string[i]);
  }
  arr.forEach(function(digit) {
    if (digit === "0") {
      zeros = true;
    }
  });
  return zeros;
}

function checkForDigitOne(value) {
  var ones = false;
  var string = value.toString();
  var arr = [];
  for (var i = 0; i < string.length; i++) {
    arr.push(string[i]);
  }
  arr.forEach(function(digit) {
    if (digit === "1") {
      ones = true;
    }
  });
  return ones;
}

function generateNumberList(n) {
  var output = [];
  for (i = 0; i <= n; i++) {
    if (divisibleByThree(i)) {
      output.push("I'm sorry, Dave, I'm afraid I can't do that.");
    } else if (checkForDigitOne(i)) {
      output.push("Boop!");
    } else if (checkForDigitZero(i)) {
      output.push("Beep!");
    } else {
    output.push(i);
    }
  }
  return output;
}











// USER INTERFACE LOGIC //

$(document).ready(function() {

  $("form#gimme-that-number").submit(function(event) {
    event.preventDefault();

    var userInput = Number($("#user-number").val());

    if (isNaN(userInput)) {
      $("#number").fadeOut();
      $("#not-an-int").fadeOut();
      $("#not-a-number").fadeIn();
    }
    else if (testInt(userInput) === false || userInput < 0) {
      console.log(userInput);
      $("#number").fadeOut();
      $("#not-a-number").fadeOut();
      $("#not-an-int").fadeIn();
    }
    else if (testInt(userInput) === true && userInput >= 0) {
      $("#not-a-number").fadeOut();
      $("#not-an-int").fadeOut();
      $("#number").fadeIn();
      $("#put-number-here").text(userInput);

      $("#number-list").text(""); // clear ouutput number list if user has already submitted a number since loading the page

      var list = generateNumberList(userInput);
      list.forEach(function(number) {
        $("#number-list").append("<li> " + number.toString() + " </li>");
      })
    }


  });

});
