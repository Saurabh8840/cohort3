
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";




export function Signin(){

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center  p-2 h-max px-4">
                <Heading label={"Sign In"} />
                <SubHeading label={"Enter your credentials to access your account"} />
                <InputBox onChange={e=>{setUsername(e.target.value);}} placeholder={"Johndoe@example.com"} label={"Email"} />
                <InputBox onChange={e=>{setPassword(e.target.value);}} placeholder={"Password"} label={"Password"}  />
                <div className="pt-4">
                    <Button  label={"Sign In"}/>
                </div>
                <BottomWarning  label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
            </div>
        </div>
    </div>
}