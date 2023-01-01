
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).



function divisors(integer) {
    let ans = []
    
    for(let i = 1; i <= integer; i++){
      if(i === integer && ans.length === 0){
        return `${integer} is prime`
      }else if(i !== 1 && i !== integer && integer % i === 0){
        ans.push(i)
      }
    }
    return ans
  };