const mongoose=require("mongoose")

 const employeeScheema= new mongoose.Schema({

    fullName:{
        type:String, required:true
    },
    email:{
        type:String, required:true  
    }

    ,
    mobile:{
        type:String, required:true
    },
  city:{
    type:String, required:true
  }


})

mongoose.model("Employee", employeeScheema)