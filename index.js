import express from "express"
import mongoose from 'mongoose'
import cors from "cors"
import dotenv from 'dotenv/config'
import jobRoute from './routes/job.routes.js'


const app = express()


// to parse the josn comming from the client
app.use(express.json())
// to allow requests from any origin
app.use(cors())




// the root path to our server
app.get('/', (req, res)=>{
    // console.log(req)
    return res.status(234).send("Welcome to the sever for Job Listing Site")
    
    })

app.use('/jobs', jobRoute )
 
    
mongoose
    .connect(process.env.DATABASE_ID)
    .then(()=>{
    console.log("databse is now connected")

    app.listen(process.env.PORT||5000, ()=>{
        console.log(`server is listening at ${process.env.PORT||5000}`)
    })
    })
    .catch((e)=>{
    console.log(e)
    })

export default app

