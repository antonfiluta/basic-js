const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = `${n}`.split('');
  let i;
  for (i = 0; i < array.length - 1; i++) {
    if (array[i + 1] > array[i]) break;
  }
  array[i] = '';
  return +array.join('');
}

module.exports = {
  deleteDigit
};
