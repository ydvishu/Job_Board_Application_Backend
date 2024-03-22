import  express, { request, response }  from "express";
import { Job } from "../models/job.models.js";

const router = express.Router()



// route to get all the jobs from database
router.get('/',async(request, response)=>{
    try {
        const jobData = await Job.find({})

        if(!jobData){
            return response.send("No data found")
        }

        return response.send({
            data:jobData
        })
    } catch (error) {
        console.log(error)
        return response.send({
            message: error.message
        })
    }
})

// route to add a job to the database

router.post('/', async(request, response)=>{
    try {

        if( !request.body.company ||
            !request.body.stipend ||
            !request.body.site ||
            !request.body.domain){
                return response.send({
                    message: "please send all the required details about the comapny"
                })
            }

        const newJobData = {
            
            company: request.body.company,
            stipend: request.body.stipend,
            site: request.body.site,
            domain: request.body.domain,

        }

        const result = await Job.create(newJobData)

        return response.send({
            messagea:"Job created succesfully"
        })
        
    } catch (error) {
        console.log(error)
        return response.send({
            message: error.message
        })
    }
})


// route to edit a job 
router.put('/:id', async(request, response)=>{
    try {

        const {id} = request.params
        const jobData = request.body

        const result = await Job.findByIdAndUpdate(id, jobData)

        if(!result){
            return response.send({
                message: "job not edited"
            })
        }

        return response.send({
            message:"job edited succesfully"
        })
        
    } catch (error) {
        console.log(error)
        return response.send({
            message: error.message
        })  
    }
})


// route to read a particular job
router.get('/:id', async(request, response)=>{
    try {

        const {id} = request.params
        const result = await Job.findById(id)
        
        return response.send(result)
    } catch (error) {
        console.log(error)
        return response.send({
            message: error.message
        })    
    }
} )

router.delete('/:id', async(request, response)=>{
    try {

        const {id} = request.params

        const result = await Job.findByIdAndDelete(id)

        return response.send({
            message:"Job deleted succesfully"
        })
        
    } catch (error) {
        console.log(error)
        return response.send({
            message: error.message
        })   
    }
})


export default router