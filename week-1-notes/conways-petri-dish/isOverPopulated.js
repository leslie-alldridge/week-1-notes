// Any live cell with more than three live neighbors dies, as if by overpopulation.

isOverPopulated = (neighbourCount) => neighbourCount > 3 ? true : false;

module.exports = isOverPopulated
