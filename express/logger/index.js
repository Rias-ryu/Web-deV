import 'dotenv/config'
import express from "express"
import logger from './logger.js'
import morgan from 'morgan'


const app = express()
const port = process.env.port || 3001

const morganformat = ':method :url :status :response-time ms'

app.use(morgan(morganformat , {
    stream: {
        write: (message) =>{
            const logObject = {
                method : message.split(' ')[0],
                url : message.split(' ')[1],
                status : message.split(' ')[2],
                responseTime : message.split(' ')[3]

            }
            logger.info(JSON.stringify(logObject))
        }
    }
}))
app.get('/' , (req,res) => {
    res.send("hello from express server")
})

app.get('/login' , (req,res) => {
    res.send("login from express server")
})

app.get('/register' , (req,res) => {
    res.send("register from express server")
})

app.get('/user' , (req,res) => {
    res.send("user from express server")
})

app.use(express.json())

let userdata = []
let id = 1

app.post('/users' ,  (req,res)=>{
    // console.log("post");
    
    const {name , mail} = req.body
    const newuser = {UserId : id++ , name , mail}
    userdata.push(newuser)
    res.status(201).send(newuser)
})


app.get('/users' , (req , res)=>{
    res.status(202).send(userdata)
})

app.put('/users/:id' , (req , res)=>{
    const newUpdate = userdata.find(t => t.UserId === parseInt(req.params.id))

    if (!newUpdate) {
        return res.status(404).send('Not Found...')
    } else {
        const {name , mail} = req.body
        newUpdate.name = name,
        newUpdate.mail = mail,
        res.status(201).send(newUpdate)
    }
})

app.delete('/users/:id', (req, res) => {
    const idToDelete = parseInt(req.params.id);
    const index = userdata.findIndex(t => t.UserId === idToDelete);

    if (index === -1) {
        return res.status(404).send('User not found');
    } else {
        userdata.splice(index, 1);
        return res.status(202).send('User deleted');
    }
});

app.get('/users/:id' , (req,res) =>{
    const userAV = userdata.find(t => t.UserId === parseInt(req.params.id))
    if (!userAV) {
        return res.status(404).send("server Not Found")
    } else {
        res.status(200).send(userAV)
    }
})




app.listen( port , () => {
    console.log(`server is listening at port ${port}...`);
    
})