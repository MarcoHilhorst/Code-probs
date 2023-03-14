// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
// Example
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

function titleCase(title, minorWords) {

    if (title === '') return ''

    let ans = ""
    let titleSplit = title.toLowerCase().split(' ')

    const contains = (word, checkList) => {
      let counter = 0
      let p2 = checkList.toLowerCase().split(' ')
      p2.map(element => word === element && counter++ )
      return counter > 0 ? false : true
    }
  
    const capitalLetter = (word) => {
      let splitWord = word.split('')
      splitWord[0] = splitWord[0].toUpperCase()
      return `${splitWord.join('')} `
    }

    titleSplit.map((element, i) => {
      if(i === 0) ans += capitalLetter(element)

      else if (!minorWords || contains(element, minorWords)) ans += capitalLetter(element)
      
      else ans += `${element} `
      
    })
    
   return ans.trimEnd()
  }