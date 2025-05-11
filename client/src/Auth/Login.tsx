import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@radix-ui/react-separator";
import { Loader2, LockKeyhole, Mail } from "lucide-react"
import { Link } from "react-router-dom";
import { useState } from "react";

type LoginInputState = {
  email: string;
  password: string;
}

const Login = () => {
const [input, setInput] = useState<LoginInputState>({
  email: "",
  password: "",
})


  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4">
    <div className="mb-4">
      <h1 className="font-bold text-2xl">Patel Eats</h1>
    </div>
    <div className="mb-4">
    <div className="relative">
    <Input 
    type="email"
    placeholder="Email"
    className="pl-10 focus-visible:ring-1"/>
    <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"></Mail>
    </div>
    </div>
    
    <div className="mb-4">
    <div className="relative">
    <Input 
    type="Password"
    placeholder="Password"
    className="pl-10 focus-visible:ring-1"/>
    <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"></LockKeyhole>
    </div>
    </div>
    <div className="mb-10">
      {
        loading ? <Button className="w-full bg-orange-400 hover:bg-orange-500"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button> : (
          <Button className="w-full bg-orange-400 hover:bg-orange-500">Login</Button>
          
        )
      }
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