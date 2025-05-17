const fs = require("fs")
const os = require("os")

const event = require('events')

class Logger extends event {
    log(message){
        this.emit("message" , {message})
    }
}

const logger = new Logger()

const logFile = "E:/Project/server/log.txt"

const logTofile = (e) => {
    const logmessage = ` ${new Date().toISOString()} - ${e.message} `
    fs.appendFileSync(logFile , logmessage + '\n')
    
}

logger.on('message' , logTofile)

setInterval( () => {
    const memory = (os.freemem() / os.totalmem())

    logger.log(`current memory usage : ${memory.toFixed(4)}`)
    
} , 3000)


logger.log("application started")
logger.log("applictaion logged")