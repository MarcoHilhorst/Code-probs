// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1


function findNb(m) {
    let res = 0
    for(let i=1; m > 0; i++){
        m = m-(i**3)
        res = i
    }
    console.log(m === 0? res : -1)
    return m === 0? res : -1
}

// Used a for loop to reduce the input value by a cubed incrementor. If this resulted in the input value hitting exaclty 0 then it returns the itteration count, otherwise -1.

// after finishing this, I think a while loop may have been tidier to use heres