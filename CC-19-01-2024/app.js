// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).


function dirReduc(arr){
    // loop in twos
    // create a variable that contains all skip combinations
    // Check if input array elements are contained in skip variable
    // if yes, then skip. If not then add both elements to answer array
    // return answer array
  
    let ans =[]
    let skip = ["NORTHSOUTH", "SOUTHNORTH", "EASTWEST", "WESTEAST"]
    for(let i = 0; i < arr.length; i ++){
      if(ans.length > 0 && skip.includes(`${ans[ans.length-1]}${arr[i]}`)){
        ans.pop()
      } 
      else {
        ans.push(arr[i])
      }
    }
    console.log(ans)
  }