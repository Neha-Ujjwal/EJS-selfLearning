const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("hello from express side!!!");
});

app.get("/about",(req,res)=>{
    res.send("hello world from the about page")
})

app.listen(8000,()=>{
    console.log("listensing to 8000");
})