const getNeighbours = require('../getNeighbours')
const createBoard = require('../createBoard.js')

test('getNeighbours in corner', () => {
  const board = createBoard(10)
  board[0][0] = 1000000
  board[0][1] = 3
  board[1][0] = 5
  board[1][1] = 11
  const expected = 19

  const neighbours = getNeighbours(0, 0, board)
  const actual = neighbours.reduce((sum, val) => (sum + val), 0)

  expect(actual).toBe(expected)
})

test('getNeighbours in middle', () => {
  let total = 0
  const board = createBoard(10)
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) {
        board[i][j] = "I'm the central cell!"
        continue
      }
      const rando = Math.round(Math.random()  * 10)
      total += rando
      board[i][j] = rando
    }
  }
  const neighbours = getNeighbours(1, 1, board)
  const actual = neighbours.reduce((sum, val) => (sum + val), 0)

  expect(actual).toBe(total)
})


test('getNeighbours in far', () => {
  const board = createBoard(10)
  board[2][5] = 5
  board[2][6] = 5
  board[2][7] = 5
  board[3][5] = 5
  board[3][6] = 4
  board[3][7] = 5
  board[4][5] = 5
  board[4][6] = 5
  board[4][7] = 5

  const expected = 40


  const neighbours = getNeighbours(3, 6, board)
  const actual = neighbours.reduce((sum, val) => (sum + val), 0)
  console.log('actual', actual)
  expect(actual).toBe(expected)
})