// Given two arrays contianting strings, find the largest difference in string size between:
// largest string in array 1 - smallest string in array 2
// or
// larget string in array2 - smallest string in array 1

// if either of the arrays are empty return -1



function mxdiflg(a1, a2) {

    if (a1.length === 0 || a2.length === 0) return -1
    
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
    
}