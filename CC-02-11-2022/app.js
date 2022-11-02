//Write a function that takes in an integer and returns the sum of all its digits. For example, 123 should return 6 ( 1+2+3)

function getSumOfDigits(int){
    let split = int.toString().split('')
    let sum = 0
    split.forEach(e => {
        sum += parseInt(e)
    })
    return sum
}