//Business (or back-end) logic

var add = function(number1, number2) {
  return number1 + number2;
};

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));

var subtract = function(number1, number2) {
  return number1 - number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

//Everything below this line is user interface (or front-end) logic:

$(document).ready(function(){
  $("form#add").submit(function(event){

    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
  });
  $("form#subtract").submit(function(event){
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
  });
    //var number1 = parseInt($("#subtract1").val());
    //var number2 = parseInt($("#subtract2").val());

    $("#output1").text(result);
    $("#output2").text(result);

    event.preventDefault();

});