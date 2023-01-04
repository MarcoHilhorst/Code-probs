// count and return the number of divisors of a positive integer (n)


function getDivisorsCnt(n){
    let total = 0
    for(let i = 1; i <= n; i++){
      if(n%i === 0){
        total += 1
      }
    }
    return total
  }