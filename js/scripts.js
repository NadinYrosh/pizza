
// user interface logic
$(document).ready(function() {
  $("#submit-order").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("#size-list").val();
    var toppings = [];
    for(var i = 1; i < 3; i++) {
      if($('#top' + i).is(':checked')) {
        toppings.push($('#top' + i).val());
      }
    }
    var newPizza = new Pizza(pizzaSize, toppings);
    var result = newPizza.costCalc();
    console.log(result);
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
    total = 8;
  } else if (this.inputSize === "medium"){
    total = 11;
  } else {
    total = 16;
  }

  this.inputToppings.forEach(function(topping){
    console.log(topping)
    if(topping === 'ham') {
      total = total + 3;
    } else if (topping === 'mozarella') {
      total = total + 2;
    }
  });

  return total;
}
