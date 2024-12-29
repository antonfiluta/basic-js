const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || isNaN(date.getTime()) || Object.prototype.toString.call(date) !== '[object Date]' || date.toString !== Date.prototype.toString) throw new Error('Invalid date!');

  let d =  Math.floor(((date.getMonth() + 1) % 12) / 3);
  
  switch (d) {
    case 0:
      return 'winter';
      break;
    case 1: 
      return 'spring';
      break;
    case 2:
      return 'summer';
      break;
    case 3: 
      return 'autumn';
      break;
  }
}

module.exports = {
  getSeason
};
