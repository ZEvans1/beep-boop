//front end----------------------
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var number = parseInt(userInput);
    var numbers = countTo(number);
    replace(numbers);
    check(number);
    $("#result").text(numbers.join(' '));
  });
});
//back end-----------------------
//checks if number is not negative
function check(number) {
  if (number < 0) {
    return false;
  } else {
    return true;
  }
}
//makes an array of numbers: 0 up to the specified number
function countTo(number) {
  var numberList = [];
  for (var i = 0; i <= number; i++) {
  	numberList.push(i);
  };
  return numberList;
};

//replaces numbers based on criteria, 0, 1, or divisible by 3
function replace(numbers) {
  var cases = ["Beep!", "Boop!", "'I'm sorry, Dave. I'm afraid I can't do that.'"];
  for (var i = 0; i < numbers.length; i++) {
    var str = numbers[i].toString();
    if (str.includes('0')) {
      numbers[i] = cases[0];
    } else if (str.includes('1')) {
      numbers[i] = cases[1];
    } else if (numbers[i] % 3 === 0) {
      numbers[i] = cases[2];
    }
    };
    return
  };
