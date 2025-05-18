import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: "src/.env"
})


const PORT = process.env.PORT || 6008

connectDB()
.then( ()=>{
    app.listen(PORT , () =>{
        console.log(`Server is Listening on ${PORT}`);
        
    })
})
.catch((Error) => {
    console.log(`DB Connection Failed ${Error}` );  
})
   
  