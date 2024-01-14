
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable (seconds) {
    let conv = {
      hours: 3600,
      mins: 60
    }
    let ans = ['00:', '00:', '00']
  
    while (seconds > 0){
      if (seconds >= conv.hours) { 
        let hrs = Math.floor(seconds/conv.hours)
        ans[0] = (hrs > 9 ? `${hrs}:` : `0${hrs}:`)
        seconds -= (hrs * conv.hours)
      }
      else if( seconds >= conv.mins) {
        let mns = Math.floor(seconds/conv.mins)
        ans[1] = (mns > 9 ? `${mns}:` : `0${mns}:`)
        seconds -= (mns * conv.mins)
      } else {
        ans[2] = (seconds > 9 ? `${seconds}` : `0${seconds}`)
        seconds -= seconds
  
      }
    }
    console.log(ans.join(''))
  
  }