
const express= require("express")

/* connect with database*/
const connect=require("./configs/db")

const app=express()

app.listen(2345, async()=>{

    try {
        await connect()
    } catch (error) {
       console.log("error", error.message) 
    }
    console.log("Listen port 2345")
})