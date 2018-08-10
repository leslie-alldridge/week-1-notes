// Any live cell with fewer than two live neighbors dies, as if by under population.

isUnderPopulated = (neighbourCount) => neighbourCount < 2 ? true : false;

module.exports = isUnderPopulated
