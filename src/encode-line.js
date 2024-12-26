const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      let count = 1, j = i + 1;
      while (arr[i] === arr[j]) {
        arr[j] = '';
        count++;
        j++;
      }
      arr[i] = count + arr[i];
      i = j - 1;
    }
  }
  return arr.join('');
}

module.exports = {
  encodeLine
};
