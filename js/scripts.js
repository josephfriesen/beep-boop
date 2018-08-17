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

function generateNumberList(n, name) {
  var output = [];
  for (i = 0; i <= n; i++) {
    if (divisibleByThree(i)) {
      output.push("<img src='img/hal.png'> I'm sorry, " + name + ", I'm afraid I can't do that. <img src='img/hal.png'");
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

function reverseListOrder(array) {
  var output = [];
  var len = array.length;
  for (var i = len-1; i >=0; i--) {
    output.push(array[i]);
  }
  return output;
}

// The following function is taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array. It was used to randomize arrays previous to writing the function joesRandomizer below.
//
// function randomize(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;
//   while (0 !== currentIndex) {
//
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// }


// This function is my own attempt to write a function that takes an array and returns an array with the entries in random order. The function iteratively runs the splice method and will change the given array to an empty array after the function finishes running.
function joesRandomizer(array) {
  var len = array.length;
  var output = [];
  var limit;
  var rand;
  for (var j = 0; j < len; j++) {
    limit = len - j;
    rand = Math.floor(Math.random() * (limit));
    output.push(array[rand]);
    array.splice(rand,1);
  }
  return output;
}









// USER INTERFACE LOGIC //

$(document).ready(function() {

  $("form#gimme-that-number").submit(function(event) {
    event.preventDefault();

    var userInput = Number($("#user-number").val());
    var sortOrder = $("input:radio[name=sort-order]:checked").val();
    var userName = $("#first-name").val();
    $(".name-here").text(userName);
    var list;

    if (isNaN(userInput)) {
      $("#number").fadeOut();
      $("#not-an-int").fadeOut();
      $("#not-a-number").fadeIn();
    }
    else if (testInt(userInput) === false || userInput < 0) {
      $("#number").fadeOut();
      $("#not-a-number").fadeOut();
      $("#not-an-int").fadeIn();
    }
    else if (testInt(userInput) && userInput >= 0) {
      $("#not-a-number").fadeOut();
      $("#not-an-int").fadeOut();
      $("#number").fadeIn();
      $("#put-number-here").text(userInput);

      $("#number-list").text(""); // clear ouutput number list if user has already submitted a number since loading the page

      if (sortOrder === "ascending") {
        list = generateNumberList(userInput, userName);
      } else if (sortOrder === "descending") {
        list = reverseListOrder(generateNumberList(userInput, userName));
      } else if (sortOrder === "randomize") {
        list = joesRandomizer(generateNumberList(userInput, userName));
      }

      list.forEach(function(number) {
        $("#number-list").append("<li> " + number.toString() + " </li>");
      })
    }


  });

});
