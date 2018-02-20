var conditionalSum = function(values, condition) {
  var sum = 0;
  var desiredRemainder = 0; //default for even case

  if(condition == "odd") desiredRemainder = 1;

  for(var i = 0; i < values.length; i++){
    if(values[i] % 2 == desiredRemainder) sum += values[i];
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));