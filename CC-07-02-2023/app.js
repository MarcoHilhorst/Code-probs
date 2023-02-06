// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.


function checkExam(array1, array2) {
    let total = 0
     array2.forEach((element, index) => {
       if(element === array1[index]){
         total += 4
       }
       if(element !== "" && element !== array1[index]){
         total -= 1
       }
     })
      return total < 0 ? 0 : total
}