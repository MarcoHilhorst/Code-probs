// Create a function that takes a list of non-negative integers and strings and returns a new list without any strings


function filter_list(l) {
    return l.filter(n => typeof n === 'number')
  }