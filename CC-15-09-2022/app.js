//Given a set of numbers, return their opposites. Positive numbers become negative and vice versa. 0 should return -0

function invert(array) {
    let ans = []
    if(array === null || array.length === 0){
      return ans
    }
    array.forEach(element => {
      if(element === 0){
        ans.push(-0)
      }
      else{
        ans.push(element * -1)
      }
    })
    return ans
  }