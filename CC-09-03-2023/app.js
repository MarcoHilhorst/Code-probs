// Write simple .camelCase method for strings. All words must have their first letter capitalized without spaces.

// For instance:
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// Pascal case, not Camel

String.prototype.camelCase=function(){
    return this.split(' ').map(function(word){
     return word.charAt(0).toUpperCase() + word.slice(1);
   }).join('');
  }