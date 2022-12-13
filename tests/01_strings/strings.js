/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  return str.includes(letter) ? true : false
}

function isPalindrome(str) {
  if (str.split('').reverse().join('') === str) {
    return true
  }
  return false
}

function cap(str, letter) {
  if (str.includes(letter)) {
    return str.substring(str.indexOf(letter) + 1, str.indexOf(letter) + 2).toUpperCase()
  }
  return 'sorry not found'
}

function firstCharacter(str1, str2) {
  if (str1.substring(0,1).toLowerCase() === str2.substring(0,1).toLowerCase()) {
    return true
  }
  return false
}

module.exports = {
  cap, firstCharacter, doesInclude, isPalindrome,
};
