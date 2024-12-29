const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let m = [...Array(matrix.length)].map(x => [...Array(matrix[0].length).fill(0,0)]);
  
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[0].length; j++) {
      if (matrix[i][j]) {
        for (let q = i - 1; q < i + 2; q++) {
          for (let w = j - 1; w < j + 2; w++) {
            if (q >= 0 && w >= 0 && q < m.length && w < m[0].length) m[q][w]++;
            console.log(q +'  '+w + ':')
            console.log(m)
          }
        }
        m[i][j]--
      }
    }
  }
     
  return m
}

module.exports = {
  minesweeper
};
