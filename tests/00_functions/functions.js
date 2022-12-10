/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
function max(n1, n2, n3) {
  let result = n1
  if (n2 > n1) {
    result = n2
  }
  if (n3 > n1) {
    result = n3
  }
  return result
}

function addUnknown(...nums) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    result += nums[i]
  }
  return result
}

function evenOrOdd(number) {
  return number % 2 === 0 ? 'even' : 'odd'
}

function operator(n1, n2, n3) {
  if (n1 + n2 === n3) {
    return 'plus'
  } else if (n1 - n2 === n3) {
    return 'minus'
  } else if (n1 * n2 === n3) {
    return 'multiply'
  } else if (n1 / n2 === n3) {
    return 'divide'
  } else {
    return null
  }
}

module.exports = {
  max, addUnknown, evenOrOdd, operator,
};
