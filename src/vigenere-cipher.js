const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool) {
    this.bool = bool;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    
    key = key.repeat(20).split('')
    .map((item, index, arr) => {
      if (message[index] === ' ') arr.splice(index, 0, ' ');
      return item;
    }).join('');
  
    message = message.split('')
    .map((item, index, arr) => {
      let char1 = item.toLowerCase().charCodeAt(0), char2 = key.toLowerCase().charCodeAt(index) - 97;
      if (char1 > 96 && char1 < 123) {
        if (char1 + char2 < 123) {
          return String.fromCharCode(char1 + char2).toUpperCase();
        } else {
          return String.fromCharCode(char1 + char2 - 26).toUpperCase();
        }
      } else {
        return item;
      }
    }).join('');

    return this.bool === false ? message.split('').reverse().join('')  : message;
}

decrypt(message, key) {
  if (!message || !key) throw new Error("Incorrect arguments!");

  key = key.repeat(20).split('')
  .map((item, index, arr) => {
    if (message[index] === ' ') arr.splice(index, 0, ' ');
    return item;
  }).join('');

  message = message.split('')
  .map((item, index, arr) => {
    let char1 = item.toLowerCase().charCodeAt(0), char2 = key.toLowerCase().charCodeAt(index) - 97;
    if (char1 > 96 && char1 < 123) {
      if (char1 - char2 > 96) {
        return String.fromCharCode(char1 - char2).toUpperCase();
      } else {
        return String.fromCharCode(char1 - char2 + 26).toUpperCase();
      }
    } else {
      return item;
    }
  }).join('');

  return this.bool === false ? message.split('').reverse().join('') : message;
}
}

module.exports = {
  VigenereCipheringMachine
};
