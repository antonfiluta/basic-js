const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let objBuf = {};
  let obj = {};
  let arr = [];
  for (let line of domains) {
    let buf = line.split('.');
    buf.forEach(elem => !!objBuf[elem] ? objBuf[elem]++ : objBuf[elem] = 1);
  }
  for (let line in objBuf) {
    let isSearch = true;
    let name = '';
    let k = 0;
    while (isSearch) {
     if (domains[k].includes(line + '')) {
      let str = domains[k].slice(domains[k].indexOf(line + ''));
      name = str === line ? str : str.split('.').reverse().join('.');
      isSearch = false;
      // return str + "      " + line;
     }
     k++;
    }
    obj['.' + name] = objBuf[line];
  }
  return obj;
  // throw new NotImplementedError('Not implemented');
}

module.exports = {
  getDNSStats
};
