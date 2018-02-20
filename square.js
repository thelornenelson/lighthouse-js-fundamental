var prompt = require("prompt-sync")();

var input = prompt("Enter a message, without spaces: ");

while(input.length < 1 || input.length > 81){
  input = prompt("Enter a message from 1 to 81 characters long: ");
}

var columns = Math.ceil(Math.sqrt(input.length));
var rows = Math.ceil(input.length / columns);
var square = [];
var coded = "";

for(var i = 0; i < rows; i++){
  square.push([]);
  for(var j = 0; j < columns; j++){
    square[i].push(input.charAt(i * columns + j)); //note this will insert blank strings for the "empty" spaces;
  }
}

for(var j = 0; j < columns; j++){
  for(var i = 0; i < rows; i++){
    coded += square[i][j];
  }
  if(j != columns - 1) coded += " ";
}

console.log(coded);
