// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.


function generateHashtag (str) {
    let ans = ["#"]
    str.split(" ").forEach(letters => {
        letters = letters.split("")
         if (letters.length >0) {
            letters[0] = letters[0].toUpperCase()
            ans.push(letters.join(""))
            }
        })
    ans = ans.join("")
    if (ans.length > 140 || ans.length === 1){
        return false
    }else{
        return ans
    } 
}



//P: string, can be empty or longer than 140 characters
//R: one string with a hashtag at the front and all the first letters of words capitalised
//E: see below
//P: split into array with each word as an element. Each element then needs to have the first character = toUpperCase(). Then need to unshift the hashtag to the front, and then join the array together to remove all white spaces

//Instead of unshifting, I simply added an array with a hashtag already at the front, and pushed results to it with a conditional that filters out empty elements
