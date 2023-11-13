const express=require("express");
const router=express.Router();

//Index-posts
router.get("/",(req,res)=>{
    res.send("Get for posts")
})

//Show-posts
router.get("/:id",(req,res)=>{
    res.send("Get for posts id")
})

//POST-posts
router.post("/",(req,res)=>{
    res.send("post for users")
})

//Delete- posts
router.delete("/:id",(req,res)=>{
    res.send("Delete for posts")
})

module.exports=router;