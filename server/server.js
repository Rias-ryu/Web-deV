const http = require('http')
const fs = require('fs')
const path = require('path')
const { type } = require('os')

const port = 3000

const server = http.createServer((req , res) => {
   const filepath =  path.join(__dirname, req.url === '/' ? 'index.html' : req.url)

   const extname = path.extname(filepath).toLowerCase()
   const mimetype = {
    '.html' : 'text/html',
    '.css' : 'text/css',
    '.js' : 'text/javascript',
    '.png' : 'img/png'

   }

  const contenttype =  mimetype[extname] || 'application/octet-stream'

  fs.readFile(filepath,(err,content) => {
    if (err) {
        if(err.code === 'ENOENT'){
            res.writeHead(404 , {"content-type" : 'text/html'})
            res.end("404 : Brain not found brother")
        }
        else{
            res.writeHead(500)
            res.end("500 : Server Error")
        }
    } else {
        res.writeHead(201,{'content-type' : contenttype})
        res.end(content, 'utf-8')
    }
  })
})

server.listen(port , ()=> {
    console.log(`server is listening on port ${port}`);
    
})