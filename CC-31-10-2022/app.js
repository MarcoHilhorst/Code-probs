// write a function to reverse the words in a string while maintaining their position in the string. For example, 'The quick brown fox' should return "ehT kciuq nworb xof"

function reverseWords(str) {
    let ans = []
    str.split(" ").forEach(element => {
        ans.push(element.split('').reverse().join(''))
    })
    
    return ans.join(' ')

  }

  reverseWords('The quick brown fox jumps over the lazy dog.')
  //'ehT kciuq nworb xof spmuj revo eht yzal .god