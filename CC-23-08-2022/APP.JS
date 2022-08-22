// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//P: Should be a single string. Possibility of multiple strings os special characters? Empty string? Should capitals be handled differently?
//R: return an object that counts the instance of each character
//E: aba => {'a': 2, 'b': 1}
//P: if not empty, split the string into idividual characters. for each character, check that the object doesnt already have a property of that character and add 1 to the value of it, otherwise create the property and set the value to 1

function count (string){
    let res ={}
    string.split("").forEach(element => {
        res[element] = ((res[element] || 0) +1)
    })
    return res
}


count('camelCase')

// Works well. Note that this treats capital letters as a separate property from the lower case equivalents