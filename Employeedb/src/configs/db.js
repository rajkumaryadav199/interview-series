
const mongoose= require("mongoose")



module.exports=()=>{
    return mongoose.connect("mongodb://localhost:27017/Employeedb",  (err)=>{
        if(!err)
        {
            console.log("mongodb connected success")
     
        }
        else{
            console.log("Errer is :" ,err)
        }
     })   
}

