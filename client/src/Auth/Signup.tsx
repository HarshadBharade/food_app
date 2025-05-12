import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@radix-ui/react-separator";
import { Contact2, Loader2, LockKeyhole, Mail, User2 } from "lucide-react"
import { Link } from "react-router-dom";
import { useState,type ChangeEvent,type ChangeEventHandler, type FormEvent } from "react";
import type { SignupInputState } from "@/Schema/userSchema";
import { userSignupSchema, type LoginInputState } from "@/Schema/userSchema";



const Signup = () => {
const [input, setInput] = useState<SignupInputState>({
  fullname:"",
  email: "",
  password: "",
  contact: "",
});
const [errors, setErrors] = useState<Partial<SignupInputState>>({});
const changeEventHandler = (e:ChangeEvent<HTMLInputElement>)=>{
  const {name, value} = e.target;
  setInput({...input,[name]:value});
}

const loginSubmitHandler = (e:FormEvent) => {
  e.preventDefault();
  // form validation 
  const result = userSignupSchema.safeParse(input);
  if(!result.success){
    const fieldErrors = result.error.formErrors.fieldErrors;
    setErrors(fieldErrors as Partial<SignupInputState>);
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
    type="text"
    placeholder="Fullname"
    name="fullname"
    value={input.fullname}
    onChange={changeEventHandler}
    className="pl-10 focus-visible:ring-1"/>
    <User2 className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"></User2>
    { errors && <span className="text-xs text-red-500">{errors.fullname}</span>}
    </div>
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
    <div className="mb-4">
    <div className="relative">
    <Input 
    type="text"
    placeholder="Contact"
    name= "contact"
    value={input.contact}
    onChange={changeEventHandler}
    className="pl-10 focus-visible:ring-1"/>
    <Contact2 className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"></Contact2>
    { errors && <span className="text-xs text-red-500">{errors.contact}</span>}
    </div>
    </div>
    <div className="mb-10">
      {
        loading ? <Button disabled className="w-full bg-orange-400 hover:bg-orange-500"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button> : (
          <Button type="submit" className="w-full bg-orange-400 hover:bg-orange-500">Signup</Button>
          
        )
      }
    </div>
    <Separator />
    <p className="mt-2">
      Already have an account? {" "}
      <Link to= "/signup" className="text-blue-500">Login</Link>
    </p>
      </form>
    </div>
  );
};

export default Signup