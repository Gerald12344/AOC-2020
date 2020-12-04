let fs = require('fs')

let input = fs.readFileSync('./input.txt', 'utf-8')
input = input.split('\n')

//Part 1
input.forEach(element => {
  input.forEach(element2 => {
    if (Number(element) + Number(element2) === 2020) {
      console.log('found it')
      console.log(element, element2)
      console.log(Number(element) * Number(element2))
    }
  })
})

//Part 2
input.forEach(element => {
  input.forEach(element2 => {
    input.forEach(element3 => {
      if (Number(element) + Number(element2) + Number(element3) === 2020) {
        console.log('found it')
        console.log(element, element2, element3)
        console.log(Number(element) * Number(element2) * Number(element3))
      }
    })
  })
})
