const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')

getNeighbours = (cellRow, cellColumn, board) => {
   // console.log(board);

    let surroundingNeighbours = [];
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            if (y === 0 && x === 0){
            }             
            else if (!indicesAreOutOfBounds(cellRow + x, cellColumn + y, board)) {
            surroundingNeighbours.push(board[cellRow + x][cellColumn + y]);
            } 
        }
    }
 //   console.log(surroundingNeighbours)
    return surroundingNeighbours;
}

module.exports = getNeighbours
