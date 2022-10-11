//Create a fucntion that transforms a string into camel case. The input string will have words separated by underscores or dashes.
//exceptions: the first letter of the first word should be returned as uppercase only if it was this way in the input string. Blank strings should also return blank strings
function toCamelCase(input){
    
    if(input.length === 0 || typeof input !== 'string'){
        return input
    }else{
        let test = input
        test = test.replaceAll('_', ' ')
        test = test.replaceAll('-', ' ').split(' ')
        test.forEach((element, index) => {
            if(index !== 0){
                let check = element.split('')
                check[0] = check[0].toUpperCase()
                element = check.join('')
                test[index] = check.join('')
            }
        })
        console.log(test.join(''))
        }    
    }

toCamelCase("the_stealth_warrior")
toCamelCase("The-Stealth-Warrior")