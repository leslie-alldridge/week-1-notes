const getNeighbours = require('./getNeighbours')

let aliveNeighbours = [];

countAliveNeighbours = (cellRow, cellColumn, board) => { 
    aliveNeighbours = (getNeighbours(cellRow, cellColumn, board));

    return aliveNeighbours.filter(Boolean).length;
}

module.exports = countAliveNeighbours
