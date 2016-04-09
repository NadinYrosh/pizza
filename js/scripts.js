
// user interface logic
$(document).ready(function() {
  $("#submit-order").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#size-list").val();
    var toppings;
    var newPizza = new Pizza(pizzaSize, toppings);
    var result = newPizza.costCalc();
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
  // return this.inputSize.val() + '' + this.inputToppings.val();
  ///fix it, so it can calculate the cost!///// ;
  var total;
  if (this.inputSize === "small"){
    return total = 8;
  } else if (this.inputSize === "medium"){
    return total = 11;
  } else {
    return total = 16;
  }

  // for (i =0; i <= this.toppings.length; i++){
  //   if (this.toppings.length <= 1){
  //     total;
  //   } else {
  //     total += this.toppings.length *1;
  //   }
  // }
  return total;
}

// var pizzaOrder = function(){
//   var orderedItems = [];
//   var userInput =
//   var size = ["Small", "Medium", "Large"];
//   var toppings = ["Ham", "Salami", "Pepperoni", "Bell pepers", "Tomatos", "Brovoli"]
//   toppings.forEach(function(topping){
//     if (var i=0; i = )
//   })
//   return orderedItems;
// };
