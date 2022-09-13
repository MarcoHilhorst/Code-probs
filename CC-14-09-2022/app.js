//Write a function that takes in an array of integers as a parameter. The function should return an array that contians the numnber of positive integers and the sum of all negative number
//0 is not considered a positive or negative integer, remember to validate the input as well

function countPositivesSumNegatives(input) {
    let ans = []
  if(input === null || input.length === 0){
    return ans
  }else{
    ans = [0, 0]
    input.forEach(num =>{
      if(num !== 0){
        num > 0 ? ans[0]++ : ans[1] += num
      }
    })
    return ans
  }
}