const express=require('express');
const jwt=require("jsonwebtoken");

const app=express()
const cors = require('cors');

app.use(cors({
    // origin: ['http://localhost:3000/login', 'http://localhost:3000/'],
    origin: ['http://127.0.0.1:3000/login', 'http://127.0.0.1:3000'],
    
    credentials:true,
    optionSuccessStatus:200,
    
}));

app.get('/api',(req,res)=>{
res.json({
message:"Hey there wellcome to this API service",
});
});
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});
app.post('/api/login',(req,res)=>{
    const user={
        id:1,
        username:"John",
        Email:"John@gamil.com"
    }
    jwt.sign({user:user},'secretkey',(err,token)=>{
        res.json({
            token,
        });
    });
    
});

app.listen(3001,(req,res)=>{
console.log("Server Logged on POrt 3001");
});