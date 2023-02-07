// Given a divisor and a bound find the largest integer N, such that N is divisible by the divisor, N is <= to the bound and is greater than 0

//E.G (2, 7) should give 6
//  (3, 10) -> 9
//  (5, 10) -> 10 


function maxMultiple(divisor, bound){
    let ans = 0
    while(true){
      if(bound%divisor === 0){
        ans += bound
        break
      }else{
        bound -= 1
      }
    }
      return ans
  }