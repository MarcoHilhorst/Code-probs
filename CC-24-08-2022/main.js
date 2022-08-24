// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//P: inputs are two arrays. It is possible for either array to be empty. Possibility of arrays also containing string values?
//R: the function should return an array that contains the elements that are unique to the array "a"
//E: ([1,2],[1]) == [2]
//   ([1,2,2,2,3],[2]) == [1,3]
//   ([], [1,2]) == []
//P: take array b, for each element filter out the selected element. Return the remainder. If array a has nothing inside (.length =0) return empty array. If array b is empty, return a.

function arrayDiff(a, b) {

    if(a.length === 0){ 
        return a
    } else {
        let res = a
        b.forEach(element => {
        res = res.filter(word => word !== element)
    })
    console.log(res)
    return res
    }
}


//test
arrayDiff([1,2,2,2,3],[2])