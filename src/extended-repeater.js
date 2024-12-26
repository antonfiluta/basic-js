const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arr1 = new Array(options.repeatTimes);
  let arr2 = new Array(options.additionRepeatTimes);

  let adding = options.addition !== undefined ? arr2.fill(options.addition + '').join(options.additionSeparator || '|') : '';
  return arr1.fill(str + '' + adding).join(options.separator || '+');
}

module.exports = {
  repeater
};
