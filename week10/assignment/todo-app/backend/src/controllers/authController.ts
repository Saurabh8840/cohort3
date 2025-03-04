import { Request,Response } from "express";
import {z} from "zod";
import bcrypt from "bcrypt";
import prisma from "../config/db";
import jwt from "jsonwebtoken";



//zod schema
const userSchema=z.object({
    email:z.string().email({message:"invalid email address"}),//email valid 
    password:z.string().min(6,{message:"password must be at least 6 char "}),//password should be 6 char
});

//signup fucntion 
export const signup =async(req:Request,res:Response): Promise<any>=>{
    try{

        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "Request body is empty" }); // <-- Added here
        }

        //validate user data
        const validation=userSchema.safeParse(req.body);
        if(!validation.success){ return res.status(400).json({error:validation.error.errors});}


        //check if user existance
        const {email,password}=req.body;
        const existingUser=await prisma.user.findUnique({where:{email}});
        if(existingUser){ return res.status(400).json({error:"User already exists"});}


        //hash password
        const hashedPassword=await bcrypt.hash(password,10);

        //store user in database
        const newUser = await prisma.user.create({
            data: { email, password: hashedPassword },
        });
          


        //send response 
        const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET as string, { expiresIn: "1h" });
        res.status(201).json({ success: true, message: "User registered", token });



    }catch(error){
        console.error("Error during signup:",error);
        res.status(500).json({error:"Internal server error"});

    }
};


//login 

export const login =async(req:Request,res:Response):Promise<any> =>{
     
    //validate
    const validate=userSchema.safeParse(req.body);
    if(!validate.success)return res.status(400).json({error:validate.error.errors});


    //check if the user exists in the db
    const {email,password}=req.body;
    const user=await prisma.user.findUnique({where:{email}});
    if(!user ||!(await bcrypt.compare(password,user.password))){return res.status(401).json({error:"Invalid credentials"});}


    //verify the password
    const token=jwt.sign({userId:user.id},process.env.JWT_SECRET!,{expiresIn:"1h"});
    res.json({success:true,token});

    //generate and return a jwt token if login is successfull
}
