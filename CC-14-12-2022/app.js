// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    let x = str.toLowerCase().split('').filter(n => n === 'x')
    let o = str.toLowerCase().split('').filter(l => l === 'o')
    return x.length === o.length? true : false
}