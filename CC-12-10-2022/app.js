// The task here is to take the following function and make it work
// duplicate([1,2,3,4,5]); should return [1,2,3,4,5,1,2,3,4,5]

function duplicate(inp){
    let ans = inp
    inp.forEach(element =>{
        ans.push(element)
    })
    console.log(ans)
}

duplicate([1,2,3,4,5])