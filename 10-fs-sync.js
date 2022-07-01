const { readFileSync, writeFileSync } = require('fs')
// destructuring the 'fs' module and extracting "readFileSync, writeFileSync" functions
console.log('start reading the file')
console.log('_________________________________')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second)
// if file is not there it will be created or if it is there, will be over written
// { flag: 'a' } for 'append' the content
writeFileSync(
  './content/result-sync.txt',
  `here is the resultanant file :: ${first} and ${second}`,
  { flag: 'a' }
)

const resFileSync = readFileSync('./content/result-sync.txt', 'utf8')

console.log(resFileSync)
console.log('done with this task')

console.log('_________________________________')
console.log('start the next one')
