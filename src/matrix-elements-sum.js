const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix
  .reduce((amount, line, i) => 
    amount + line.reduce((sum, item, j) => 
      sum + (i > 0 ? matrix[i - 1][j] !== 0 ? item : 0 : item)
    , 0)
  , 0);
}

module.exports = {
  getMatrixElementsSum
};
