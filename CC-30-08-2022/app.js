// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway
// 


function pigIt(str){
    let arr = str.split(" ")
    let res =[]
    arr.forEach(word => {
        let newArr = word.split("") 
        console.log(newArr[0])
        let c = newArr[0].charCodeAt(0)
        if(c>65 && c<91 || c>96 && c<123){
            newArr.push(`${newArr[0]}ay`)
            newArr.shift()
            res.push(newArr.join(""))
        }
        res.push(newArr.join(""))
    })
    console.log(res.join(" "))
    return res.join(" ")
}



pigIt('Pig latin is cool')
//pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')

pigIt('Hello world !')
//elloHay orldway !

// string.charCodeAt(index) returns a number based on the character at the specified index. Useful for designating a range that includes only letters of the alphabet.