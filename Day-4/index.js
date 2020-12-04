let fs = require('fs')

let input = fs.readFileSync('./input.txt','utf-8')
let eachPassport = input.split('\n').join('!').split('!!')
let out = []
eachPassport.forEach(element =>{
  let stage1 = element.split("!").join(" ")
  stage1 = stage1.split(" ")
  let final = {}
  stage1.forEach((secondElement,i) => {
    let splitInto = secondElement.split(":")
    final[splitInto[0]] = splitInto[1]
  })
  out.push(final)
})
let validCount = 0
out.forEach(element => {
  if(Object.keys(element).length === 8){
    validCount++
  }
  if(Object.keys(element).length === 7 && element.cid === undefined){
    validCount++
  }
})
console.log(validCount)
validCount = 0

function byr(date){
  date = Number(date)
  return (date >= 1920 && date <= 2002)
}
function iyr(date){
  date = Number(date)
  return (date >= 2010 && date <= 2020)
}
function eyr(date){
  date = Number(date)
  return (date >= 2020 && date <= 2030)
}

function hcl(color){
  output = true
  if(!(color[0] === '#')){
    output = false
  }
  if(color.length > 7 || color.length < 7 ){
    output = false
  }
  let split = color.split("")
  split.splice(0,1)
  split.forEach(element => {
    if(isNaN(Number(element))){
      if(!(['a','b','c','d','e','f'].includes(element))){
        output = false
      }
    }
  })
  return output
}
function ecl(color){
  return ['amb','blu','brn','gry','grn','hzl','oth'].includes(color)
}
function pid(nummber){
  let output = true
  if(!(nummber.length === 9)){
    output = false
  }
  if(isNaN(Number(nummber))){
    output = false
  }
  return output
}
function hgt(height){
  let number = Number(height.replace("cm","").replace("in",''))
  if(height.endsWith('cm')){
    return (number >= 150 && number <= 193 )
  }
  if(height.endsWith('in')){
    return (number >= 59 && number <= 76 )
  }
}

out.forEach(element => {
  if(Object.keys(element).length === 8){
    if(byr(element.byr)&&iyr(element.iyr)&&eyr(element.eyr)&&hgt(element.hgt)&&hcl(element.hcl)&&ecl(element.ecl)&&pid(element.pid)){
      validCount++
    }
    
  }
  if(Object.keys(element).length === 7 && element.cid === undefined){
    if(byr(element.byr)&&iyr(element.iyr)&&eyr(element.eyr)&&hgt(element.hgt)&&hcl(element.hcl)&&ecl(element.ecl)&&pid(element.pid)){
      validCount++
    }
  }
})
console.log(validCount)
