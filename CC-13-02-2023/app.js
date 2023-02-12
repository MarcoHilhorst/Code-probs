// Determine if the input array of integers are in ascending order or not. Return true or false. Assume that all inputs are valid.

function inAscOrder(arr) {
    let store = arr
    return arr.join('') === store.sort((a, b) => a - b).join('') ? true : false
  }