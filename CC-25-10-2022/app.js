// Write a function that breaks a camel case string into a sentenece with individual words. If the input string is empty, return an empty string, if the string only has one word then return that one word

function solution(string) {
    let split= string.split("")
    let ans = []
    
    for(let i=0; i<string.length; i++){
        if(split[i] === split[i].toUpperCase()){
            ans.push(" ", string[i])
        }
        else{
            ans.push(string[i])
        }
    }
    return ans.join('')
}

solution('camelCasingTest')