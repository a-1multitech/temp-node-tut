const http = require('http')

const server = http.createServer((req, resp) => {
  // console.log(req)
  if (req.url === '/') {
    resp.end('welocme to our hom epage')
  }
  if (req.url === '/about') {
    resp.end('Here is our short history')
  }
  // resp.write('welocme to our hom epage')
  // resp.end()
  resp.end(`<h1>Opps!!!</h1>
  <p> We cant find the pgae you are looking for </p>
  <a href="/">Back to home page</a>`)
})

server.listen(5000)
