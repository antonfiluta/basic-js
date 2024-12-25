const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.reduce((sum, elem) => {
    return sum + elem.reduce((s, e) => {
      return s + (e === '^^' ? 1 : 0);
    }, 0)
  }, 0)
}

module.exports = {
  countCats
};
