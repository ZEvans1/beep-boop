//front end
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var number = parseInt(userInput);
    // console.log(userInput);
    // console.log(numbers);
    var numbers = countTo(number);
    var output = replace(numbers);
    check(number);
    $("#result").text(numbers.join(' '));
    console.log(numbers);
    console.log(output);
    //var numbers = userInput.split('');
  });
});
//back end
function check(number) {
  if (number < 0) {
    return false;
  } else {
    return true;
  }
}

function countTo(number) {
  var numberList = [];
  for (var i = 0; i <= number; i++) {
  	numberList.push(i);
  };
  return numberList;
};

function replace(numbers) {
  //var numbersStr
  debugger;
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
  //return numbers;
