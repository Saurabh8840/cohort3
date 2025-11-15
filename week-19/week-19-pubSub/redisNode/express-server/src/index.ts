import express from "express";

import {createClient, REDISEARCH_LANGUAGE }  from "redis"

const app=express();
app.use(express.json());

const client=createClient();
client.connect();

app.post('/submit',(req,res)=>{
    const {problemId ,userId ,code ,language}=req.body

    //push this to a db prisma.submission.create()

    client.lPush("submissions",JSON.stringify({problemId,userId ,code,language}))
    res.json({
        message:"Submission received!"
    })
})

app.listen(3000)