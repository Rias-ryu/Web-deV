const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer( (req , res) => {
    if (req.url === '/') {
        res.statusCode = 201
        res.setHeader('content-type' , 'text/plain')
        res.end('Hello from personal server')
    }else if(req.url === "/login"){
      res.statusCode = 201
        res.setHeader('content-type' , 'text/plain')
        res.end('welcome to login page')  
    }else{
        res.statusCode = 400
        res.setHeader('content-type' , 'text/plain')
        res.end('server not found')
    }
})

server.listen(port , hostname , () => {
    console.log(`server is listening on http://${hostname}:${port}`);
    
})

