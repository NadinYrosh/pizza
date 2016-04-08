
// user interface logic
$(document).ready(function() {
  $("#submit-order").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $(".size").val();
    console.log();
    var topping = $().val();
    var sizeInput = $("#size").val();

  });
});





//business logic

//object holds size and toppings
function Pizza(size, toppings) {
  this.inputSize = size;
  this.inputToppings = toppings;
}
//prototype method
Pizza.prototype.costCalc = function(){
  return this.inputSize.val() + '' + this.inputToppings.val();
  ///fix it, so it can calculate the cost!///// ;
}

var pizzaOrder = function(){
  var orderedItems = [];
  var userInput =
  var size = ["Small", "Medium", "Large"];
  var toppings = ["Ham", "Salami", "Pepperoni", "Bell pepers", "Tomatos", "Brovoli"]
  toppings.forEach(function(topping){
    if (var i=0; i = )
  })
  return orderedItems;
};
