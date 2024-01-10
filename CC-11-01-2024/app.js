// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

function multiplicationTable (size) {
    let ans = []
    for(let i = 1; i <= size; i++){
      let arr = []
      for(let ii = 1; ii <= size; ii++){
        arr.push(ii*i)
      }
      ans.push(arr)
    }
    console.log(ans)
  }
  
  multiplicationTable(5)