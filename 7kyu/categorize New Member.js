// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

function openOrSenior(data){
    ans = []
    data.forEach(element => {
        element[0] > 54 && element[1] > 7 ? ans.push('Senior') : ans.push('Open')
    })
    console.log(ans)
  }

  openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])
//   ['Open', 'Senior', 'Open', 'Senior'])