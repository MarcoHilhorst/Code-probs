// The task is to implement a function that takes a sequence as an argument and a return a list of items. This list of items should not have any elements of the same value next to each other and should also retain the orignal order of the elements

//for example, ('AABCcAD') should return ['A', 'B', 'C', 'c', 'A', 'D']


// Note that an array of numbers can also be given as an argument
// for example, ([1,2,2,3,3]) should return [1,2,3]

function uniqueInOrder (input){
    let ans = []
    for(let i=0; i<input.length; i++){
        if(input[i] !== input[i-1]){
            ans.push(input[i])
        }
    }
    console.log(ans)  
}


//tried a forEach loop first, but that wasnt going to work with a string. Changed to a simple for loop and that worked well
// after completing it, you could also use filter() to acheive a similar result