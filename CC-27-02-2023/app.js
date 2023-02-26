// Write a function that returns the number of javascript developers coming from Europe from a list of collected data.
// Data will be structured as below:
    
// var list1 = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//     { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//     { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//     { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
//   ];


function countDevelopers(list) {
    let num = 0
    list.forEach(element => {
      if(element.continent === 'Europe' && element.language === 'JavaScript'){
        num += 1
      }
    })
    return  num
  }

// Can use filter method and re-factor to the following


function countDev(list) {
    list.filter(dev => dev.continent === 'Europe' && dev.language === 'JavaScript').length
}