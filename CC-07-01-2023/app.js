// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest. Assume the strings in the array passed into thee function all have different lengths

//E.G ["Telescopes", "Glasses", "Eyes", "Monocles"] ===> ["Eyes", "Glasses", "Monocles", "Telescopes"]



function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length, 0)
  };