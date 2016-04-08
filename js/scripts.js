//business logic

//object holds size and toppings
function Pizza(size, toppings) {
  this.inputSize = size;
  this.inputToppings = toppings;
}

//prototype method for the cost of a pizza depending on the selections chosen
Pizza.prototype.costCalc = function(){
  return .inputSize + '' + .inputToppings; ///fix it, so it can calculate the cost!///// ;
}
