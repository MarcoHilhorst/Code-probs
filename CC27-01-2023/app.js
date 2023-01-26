// write a function that sorts the passed in array of numbers. If the function passes an empty array or null value then it should return an empty array.

//  E.G [1, 2, 10, 50, 5] should return [1,2,5,10,50]


function solution(nums){
    if(nums == null){
      return []
    }
    return nums.sort((a, b) => a - b)
  }