// npm - global commant
// npm --version
// npm i <packageName> //install locally means meant for this perticular package
// npm install -g  <packageName> //install global
// sudo npm install -g  <packageName> //if install global MAC may need sudo

// git remote add origin https://github.com/a-1multitech/temp-node-tut.git
// git branch -M main
// git push -u origin main

const _ = require('lodash')
const item = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(item)
console.log(newItems)
