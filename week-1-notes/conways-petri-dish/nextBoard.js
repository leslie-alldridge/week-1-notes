var nextCellState = require('./nextCellState');
var countAliveNeighbours = require('./countAliveNeighbours');
var createBoard = require('./createBoard')

function nextBoard(currentBoard) {
  var newBoard = createBoard(currentBoard.length)
  
  for (let i = 0; i < currentBoard.length; i++) {
    for (let j = 0; j < currentBoard.length; j++) {
      newBoard[i][j] = nextCellState(currentBoard[i][j], countAliveNeighbours(i, j, currentBoard))
    }
  }
  return newBoard;
}

module.exports = nextBoard;