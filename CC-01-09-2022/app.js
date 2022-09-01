// Write as function that takes a camel case sentence (string) and adds spaces between each of the words



function solution(string) {
    let result = []
    string.split("").forEach(letter => {
        if(letter === letter.toUpperCase()){
          result.push(" ")
          result.push(letter)
        }else{
          result.push(letter)
        }
    })
    console.log(result.join(""))
};

solution('camelCasingTest')


//Ex:
//solution('camelCasingTest') 'camel Casing Test'