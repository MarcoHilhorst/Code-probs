// Write a function that reverses an array without using the ".reverse()" function.

reverse = function(array) {
    let n = array.length -1
    let ans = []
    while(n>=0) {
      ans.push(array[n])
      n = n -1
    }
    return ans
}

