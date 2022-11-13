
const mongoose= require("mongoose")



 mongoose.connect("mongodb://localhost:27017/Employeedb", {useNewUrlParse:true}, (err)=>{
    if(!err)
    {
        console.log("mongo db connected success")

    }
    else{
        console.log("Errer is :" ,err)
    }
 })   
