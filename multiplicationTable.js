var multiplicationTable = function(maxValue) {
  var table = lineGen(maxValue);

  for(var i = 1; i <= maxValue; i++){
    table += "\n" + rowGen(i, maxValue);
    table += "\n" + lineGen(maxValue);
  }

  return table;
};

var lineGen = function(maxValue){
  var boxLength = (maxValue * maxValue).toString().length + 2;
  var line = "+" + "-".repeat(boxLength); // first +----- segment;
  return line.repeat(maxValue) + "+"; //repeat for all columns and add trailing +
}

var rowGen = function(currentRow, maxValue){
  var row = "";
  for(var i = 1; i <= maxValue; i++){
    row += "| " + currentRow * i;
    row += " ".repeat((maxValue * maxValue).toString().length - (currentRow * i).toString().length) + " ";
  }
  return row + "|";
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));