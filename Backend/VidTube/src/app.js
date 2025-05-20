import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)
// common middleware
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true , limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// Import Routes
import healthcheckrouter from "./routes/healthcheck.route.js"
import userRouter from "./routes/users.route.js"
// import { errorHandler } from "./middlewares/error.middleware.js"

// Routes

app.use("/api/v1/healthcheck" , healthcheckrouter)
app.use("/api/v1/users" , userRouter)


// app.use(errorHandler)
 
export {app} 