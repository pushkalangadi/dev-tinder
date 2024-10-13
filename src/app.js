const express=require('express');
const app=express();


app.use("/test",(req,res)=>{
    res.send("hello from ser")
});

app.listen(3000,()=>{
    console.log("server running");
});


console.log("hello world");