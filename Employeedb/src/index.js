const express= require("express")


const  connect  = require("./configs/db")

const employeeController=require("./controller/employeeController")

const app=express()



app.listen(2345, async()=>{
    try {
        await connect()
    } catch (error) {

        console.log("error is", error.message)
        
    }

    console.log("Listen port 2345")
})