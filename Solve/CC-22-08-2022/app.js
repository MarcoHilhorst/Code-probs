// Write a function that takes an array of integers and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

//P: can the target number be negative? is array.length always > 2? how to hanlde multiple correct answers? Can the array contain the target number itself? what if the element *2 = target number
//R: the indicies of two elements that when added together equal the target number
//E: [1,2,3,4], 4 => [0, 2] (1+3)
//   [12, 20, 40, 35], 55 => [1, 3]
//P: want to select the first number and check if adding the second number to it gives us the target number. 
//  if it doesn't, we want to then take the first and third numbers, and so on.
//  if the target number isn't reached using the first number and any of the other elements, we want to use the second number, and repeat this process
//  using two loops, we can have the outer one control which element is the one we are adding to each of the subsequent array elements
//  the inner loop can be used to do the adding of the outer loop number and the array elements
//  if we have more than one possible solution in the array we will ignore the later ones
//  use an empty array that will store the indicies of the solution and return it at the end of the outer loop 
//  when we have a solution, we will stop the function



function twoSum(arr, tar){
    let result = []
    if(result.length === 0){
        arr.forEach((element, index) => {
            arr.forEach((e, i) => {
                if(result.length === 0){
                    // if the outer and inner loop have the same index selected, skip
                    if(index === i){
                    
                    }else if(element+e === tar){
                    result.push(index)
                    result.push(i)
                    }
                }                
            })
        })
    }
    console.log(result)
}

twoSum([1, 2, 3], 4)