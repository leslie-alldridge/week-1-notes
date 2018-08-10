// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

isRessurectable = (neighbourCount) => neighbourCount == 3 ? true : false;

module.exports = isRessurectable
