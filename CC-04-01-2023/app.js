// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...


function SeriesSum(n){
    let ans = 1
    let count = 4
    if(n === 1 || n === 0){
      return `${n}.00`
    }
    for(let i = 1; i < n; i++){
      ans += (1/count)
      count += 3
    }
    return ans.toFixed(2)
  }