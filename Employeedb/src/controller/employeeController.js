const express=require("express")

const router=express.Router()

router.get("/", (req, res)=>{
    req.json("sample text")

})

module.exports = router

