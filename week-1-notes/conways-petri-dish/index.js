const createBoard = require('./createBoard')
const nextBoard = require('./nextBoard')
const displayBoard = require('./displayBoard')

const size = 30
const refreshInteral = 80

let board = createBoard(size)

for (let y = 0; y < board.length; y++) {
  for (let j = 0; j < board.length; j++) {
    board[y][j] = (Math.random() >= 0.5)
  }
}


setInterval(() => {
  displayBoard(board)
  board = nextBoard(board)
}, refreshInteral)