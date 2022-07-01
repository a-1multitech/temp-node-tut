const { readFile, writeFile } = require('fs')
console.log('start the task _________________________________')
readFile('./content/first.txt', 'utf8', (err, readData) => {
  if (err) {
    console.log('error in forst is : ', err)
    return err
  }
  console.log(readData)
  const first = readData
  readFile('./content/second.txt', 'utf8', (err, readData) => {
    if (err) {
      console.log('error in second is : ', err)
      return err
    }
    console.log(readData)
    const second = readData

    writeFile(
      './content/result_async.txt',
      `Async write -  is the resultanant file :: ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log('Error during write', err)
          return
        }

        console.log('done with the task _________________________________')
      }
    )
  })
})

console.log('************ stating next task - the last console log')
