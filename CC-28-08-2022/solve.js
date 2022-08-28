// Case: Remove the spaces from an input string. String will always be truthy

function noSpace(x){
    return x.replace(/\s/g, '')
   }

noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')

// simple regex that uses the \s to select spaces and the g (global) tag to apply to all instances, then replace with '' using .replace 