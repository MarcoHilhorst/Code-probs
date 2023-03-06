// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// All numbers will be whole numbers greater than 0

function expandedForm(num) {
    let split = Array.from(String(num), Number)
    let ansString = ""
    split.forEach((element, index) => {
      let multiplier = Math.pow(10, (split.length-1-index))
      if(element !== 0){
        let str = element*multiplier
        index === 0 ? ansString += str : ansString += ` + ${str}`
        console.log(ansString)
      }
    })
    return ansString
  }