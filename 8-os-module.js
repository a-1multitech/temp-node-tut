const os = require('os')

const user = os.userInfo()

// console.log(user)

console.log(`system up time is : ${os.uptime / 3600} in Hours`)
//===========

const currOS = {
  name: os.type(),
  rel: os.release(),
  totmem: os.totalmem(),
  freemem: os.freemem(),
}

console.log(currOS)
