function stray(numbers) {
  let one = []
  let two = []
  numbers.forEach(element =>{
    if(one.length === 0){
      one.push(element)
    }else if(one.includes(element)){
      one.push(element)
    }else{
      two.push(element)
    }
  })

  if(one.length > two.length){
    console.log(two[0])
  }else{
    console.log(one[0])
  }
}

stray([1, 1, 2])
2

// Finds the odd number in the array and console logs it.

//After getting the above solution working, a better solution would have been to sort the input array, and then test if the first two elements were the same or not. We can then take either the first or last element and return it
// E.G if numbers[0] !== numbers[1] return numbers[0]
//      else return numbers9numbers.length-1]