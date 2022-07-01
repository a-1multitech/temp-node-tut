const path = require('path')

// using separator property
console.log(path.sep)

// joing the path and get normalized joined path

const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)
const absPath = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')

console.log(absPath)
//  console.log(__dirname)
console.log(path.parse(__filename))

// return all the info about the file in __filename

// {
//   root: '/',
//   dir: '/Users/macintosh/__JS_Nodes_MERN_Mongo_Videos/Tutorial_Node',
//   base: '9-path_module.js',
//   ext: '.js',
//   name: '9-path_module'
// }
//
