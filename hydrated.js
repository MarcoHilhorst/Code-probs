// You get given the time in hours and you need to return the number of litres the cyclist will drink, rounded to the smallest value.
// the cyclist drinks 0.5 litres of water per hour of cycling.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
    return Math.floor(time/2)
  }