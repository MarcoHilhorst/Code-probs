// Return the number (count) of vowels in the given string.
// Y is not considered a vowel in this example
// The input string will only consist of lower case letters and/or spaces.

//Ex: "abracadabra"-> 5

function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    str.split("").forEach(letter => {
        if(vowels.includes(letter)){
            count += 1
        }
    })
    return count
}

// this splits the word into an array, with each letter as an element. It then iterates over the array and checks if each element matches any of the elements in the vowels array. If a  match is found, it incerases the count variable by one and moves on, otherwise it simply moves on. 