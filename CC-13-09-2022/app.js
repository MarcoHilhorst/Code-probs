// Write a function that takes 3 integers as parameters. These integers will represent hours, minutes, and seconds. The function should return how many milliseconds it has been since midnight for the given hour/min/sec

// example h=0, m= 1, s= 1: -> 61000 milliseconds

function past(h, m, s){
  let total = 0
  total += (h*3600000) + (m*60000) + (s*1000)
  return total
}