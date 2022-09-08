// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2



function digitalRoot(n) {
    let total = 0
    while(n > 9){
        let arr = n.toString().split('')
        arr.forEach(element => {
            total += Number(element)
        })
        n = total
        total = 0
    }
    console.log(n)
}

digitalRoot(456)
// shoudl equal 6

// First try I had the let arr = declaration outside of the while loop which didnt work.