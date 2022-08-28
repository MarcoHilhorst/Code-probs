// create a function that takes two strings as arguments, combines them, sorts them alphabetically, and removes duplicates 


function longest(s1, s2) {
  let str = s1 + s2
  let ans = str.split("").sort((a, b) => a.localeCompare(b))
  return [...new Set (ans)].join("") 
}


longest("aretheyhere", "yestheyarehere")

// longest("aretheyhere", "yestheyarehere"), should return "aehrsty"

//Set object ensures that values are unique, and by using it with the spread syntax it turns into an array. From this point I can now use .join to return it into a single string.
//Without the spread syntax I think I would have had to use a for loop to take the values out of the Set object properties and push them to an empty array