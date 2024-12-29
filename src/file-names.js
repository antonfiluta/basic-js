const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  for (let index = 0; index < names.length; index++) {
    let amount = names.slice(0, index).filter(item => item === names[index] || item.slice(0, item.length - 3) === names[index]).length;
    names[index] = !amount ? names[index] : names[index] + `(${amount})`;
  }
  return names;
}

module.exports = {
  renameFiles
};
