var generateBoard = function(whiteQueen, blackQueen){
  var board = [];
  for(var i = 0; i < 8; i++){
    board.push([0,0,0,0,0,0,0,0]);
  }
  board[whiteQueen[1]][whiteQueen[0]] = 1;
  board[blackQueen[1]][blackQueen[0]] = 1;
  return board;
}

var queenThreat = function(board){
  console.log(board);
  var queens = [];
  for(var i = 0; i < board.length; i++){
    for(var j = 0; j < board[i].length; j++){
      if(board[i][j] == 1) queens.push([i, j]); 
    }
  }

  if(queens[0][0] == queens[1][0] || queens[0][1] == queens[1][1]) return true; //queens are on same row or column

  var difference = [Math.abs(queens[0][0] - queens[1][0]), Math.abs(queens[0][1] - queens[1][1])];
  if(difference[0] == difference[1]) return true;
  else return false;
}

console.log("Queen threat detected? " + queenThreat(generateBoard([0,5],[5,0])) + " (should be true)");
console.log("Queen threat detected? " + queenThreat(generateBoard([0,0],[7,5])) + " (should be false)");
