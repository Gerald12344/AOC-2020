let fs = require('fs')

let input = fs.readFileSync('./input.txt', 'utf-8')
let out = []

function workOut(accross, down) {
  input.split('\n').forEach((element, i) => {
    let lineOut = ""
    for (let i = 0; i < 300; i++) {
      lineOut = lineOut + element
    }
    out[i] = lineOut
  })
  let fixed = []
  let y = accross
  let trees = 0
  console.log(y,down)
  for (let x = down; x < out.length; x=x+down) {
    if (out[x][y] === '#') {
      trees++
    }
    fixed[x] = x + " " + y
    y = y + accross
  }
  return trees
}
//console.log(trees)
console.log(workOut(3,1))
console.log(workOut(1,1))

console.log(workOut(1,1)*workOut(3,1)*workOut(5,1)*workOut(7,1)*workOut(1,2))

