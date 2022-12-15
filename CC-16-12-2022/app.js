// Write a function that replaces all but the last 4 letters of a string with '#', like you have when bank card details are stored.

function maskify(cc) {
    let ans = []
    cc.split('').forEach((element, index) => {
      if(index > cc.length -5){
        ans.push(element)
      }else{
        ans.push('#')
      }
    })
    console.log(ans.join(''))
  }