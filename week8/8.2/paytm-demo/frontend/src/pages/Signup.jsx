import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import axios from "axios";

export function Signup(){
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [userName,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const navigate=useNavigate();//hook help in page navigate

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col  justify-center ">
            <div  className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign up"}/>
                <SubHeading label={"Enter your information to create an account"} />
                <InputBox onChange={e =>{setFirstName(e.target.value);}} placeholder="John" label={"First Name"} />
                <InputBox onChange={e =>{setLastName(e.target.value);}} placeholder="Doe" label={"Last Name"} />
                <InputBox onChange={e =>{setUsername(e.target.value);}} placeholder="John@gmail.com" label={"Email"} />
                <InputBox onChange={e =>{setPassword(e.target.value);}} placeholder="123456" label={"Password"} />
                 <div  className="pt-4">
                    <Button onClick={async()=>{
                        const response=await axios.post("https://localhost:3000/api/v1/user/signup",{
                            userName,
                            firstName,
                            lastName,
                            password
                        });
                        localStorage.setItem("token",response.data.token)
                        navigate("/dashboard")
                    }}  label={"Sign up"} />
                 </div  >
                 <BottomWarning label={"Already have an account?"}  buttonText={"Sign in"} to={"/signin"} /> 
            </div>
        </div>

    </div>


}