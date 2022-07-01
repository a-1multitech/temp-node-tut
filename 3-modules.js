// modules
// just like python modules , to splitt the code in differemt files/modules
// Module is for - Encapsulation of the Code for separating functionality
// Every file in Node is a Module

// const ram = 'Ram'
// const shyam = 'Shyam'

const sayHi = require('./5-utils')
const names = require('./4-names')
const data = require('./6-alt-flav')

require('./7-mind-grenad')

// console.log(names)

// const sayHi = (name) => {
//   console.log(`Hello there  - ${name} `)
// }

sayHi('Shiv')
sayHi(names.ram)
sayHi(names.shyam)
// //
// console.log(data)
// console.log('==========================')
// console.log(data.items)
// console.log(data.oneperson)
