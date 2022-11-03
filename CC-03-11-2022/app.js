// write a function that can take any non-negative integer and return the degits in descending order.

function descendingOrder(n){
    return parseInt(n.toString().split('').sort((a, b) => b-a).join(''))
}