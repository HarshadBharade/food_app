import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@radix-ui/react-separator";
import { Loader2, LockKeyhole, Mail } from "lucide-react"
import { Link, useActionData } from "react-router-dom";
import { useState,type ChangeEvent,type ChangeEventHandler, type FormEvent } from "react";
import { userLoginSchema, type LoginInputState } from "@/Schema/userSchema";



const Login = () => {
const [input, setInput] = useState<LoginInputState>({
  email: "",
  password: "",
});
const [errors, setErrors] = useState<Partial<LoginInputState>>({});
const changeEventHandler = (e:ChangeEvent<HTMLInputElement>)=>{
  const {name, value} = e.target;
  setInput({...input,[name]:value});
}

const loginSubmitHandler = (e:FormEvent) => {
  e.preventDefault();
  // form validation
  const result = userLoginSchema.safeParse(input);
  if(!result.success){
    const fieldErrors = result.error.formErrors.fieldErrors;
    setErrors(fieldErrors as Partial<LoginInputState>);
    return;
  }
  // login api implementation
  console.log(input);
}

  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4">
    <div className="mb-4">
      <h1 className="font-bold text-2xl">Patel Eats</h1>
    </div>
    <div className="mb-4">
    <div className="relative">
    <Input 
    type="email"
    placeholder="Email"
    name="email"
    value={input.email}
    onChange={changeEventHandler}
    className="pl-10 focus-visible:ring-1"/>
    <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"></Mail>
    { errors && <span className="text-xs text-red-500">{errors.email}</span>}
    </div>
    </div>
    
    <div className="mb-4">
    <div className="relative">
    <Input 
    type="Password"
    placeholder="Password"
    name= "password"
    value={input.password}
    onChange={changeEventHandler}
    className="pl-10 focus-visible:ring-1"/>
    <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"></LockKeyhole>
    { errors && <span className="text-xs text-red-500">{errors.password}</span>}
    </div>
    </div>
    <div className="mb-10">
      {
        loading ? <Button disabled className="w-full bg-orange-400 hover:bg-orange-500"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button> : (
          <Button type="submit" className="w-full bg-orange-400 hover:bg-orange-500">Login</Button>
          
        )
      }
      <div className="mt-4">
        <Link to= '/forgot-password' className="hover:text-blue-500 hover:underline">Forgot Password</Link>
      </div>
    </div>
    <Separator />
    <p className="mt-2">
      Don't have an account? {" "}
      <Link to= "/signup" className="text-blue-500">Signup</Link>
    </p>
      </form>
    </div>
  );
};

export default Login