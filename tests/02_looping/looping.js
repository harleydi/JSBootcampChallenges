/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
  let i = 1
  let total = 1
  while (i <= num) {
    total *= i
    i++
  }
  return total
}

function stringReverse(str) {
  let output = []
  for (let i = str.length - 1; i >= 0; i--) {
    output.push(str[i])
  }
  return output.join('')
}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {

}

function addTheEvens(num) {
  let total = 0
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      total += i
    }
  }
  return total
}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
