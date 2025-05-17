import {serve} from 'bun'

serve({
    fetch(request){
        const url = new URL(request.url)
        if (url.pathname === '/') {
            return new Response('hello from bun server' , {status: 200})
        } else if (url.pathname === '/login') {
            return new Response('login from bun server' , {status: 201})  
        }else if (url.pathname === '/register') {
            return new Response('register from bun server' , {status: 201})  
        }else{
            return new Response("404 bun not found" , {status: 404})
        }
    },
    port : 3005,
    hostname: "127.0.0.1"
})