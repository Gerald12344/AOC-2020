let fs = require('fs')

//Input formatter
let input = fs.readFileSync('./input.txt','utf-8')
input = input.split('\n')
input.forEach((element,i) =>{
  input[i] = input[i].split(" ")
})
console.log(input)
input.forEach((element,i) => {
  input[i] = {min: element[0].split('-')[0],max: element[0].split('-')[1], letter: element[1].replace(':',""),password:element[2]}
})

//Part 1
validCount = 0
input.forEach(element => {
  let letterCounter = 0
  let letterNeeded = element.letter
  element.password.split("").forEach(element2 => {
    if(element2 === letterNeeded){
      letterCounter++
    }
  })
  if(letterCounter > element.max){
    
  }
  else if(letterCounter < element.min){
    
  }else{
    validCount++
  }
})
console.log(validCount)

//Part2
validCount = 0
input.forEach(element => {
  let letterNeeded = element.letter
  let first = false
  let second = false
  if(element.password[Number(element.min)-1] === letterNeeded){
    first = true
  }
  if(element.password[Number(element.max)-1] === letterNeeded){
    second = true
  }
  if(first === true && second === false){
    validCount++
    element.valid = true
  }
  if(first === false && second === true){
    validCount++
    element.valid = true
  }
  if(element.valid === undefined){
    element.valid = false
  }
})
console.log(input.length)
console.log(validCount)
