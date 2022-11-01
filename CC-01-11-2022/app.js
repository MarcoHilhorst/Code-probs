//Write a function that takes the vowels out of the input string.

function disemvowel(str) {
    let substrings = ['a', 'e', 'i', 'o', 'u']
    let arr = str.split('')
    let ans = []
    arr.forEach(e => {
        if(!substrings.some((x) => x === e.toLowerCase())){
            ans.push(e)
        }
    })
    console.log(ans.join(''))
}



  disemvowel("Thiiiiiis website is for losers LOL!")
  //"Ths wbst s fr lsrs LL!"