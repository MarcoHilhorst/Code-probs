// Write a function that splits a string into pairs and stores them in an array. If the string contains an odd number of characters then add a "_" to the second character of the final pair


function solution(str){
    let ans = []
    if(str.length %2 !== 0){
        str = str + '_'
    }
    
    for(let i=0; i<str.length; i= i + 2){
        ans.push(str[i]+str[i+1])
    }
    return ans
}