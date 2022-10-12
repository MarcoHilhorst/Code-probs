// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
// The result must be without duplicates

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []



function inArray(arr1,arr2){
    let res = []
    arr1.forEach(arr1E => {
        arr2.forEach(arr2E => {
            if(arr2E.includes(arr1E) && !res.includes(arr1E)){
                res.push(arr1E)
            }
        })
    })
    return res.sort()

}   

inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"] )
