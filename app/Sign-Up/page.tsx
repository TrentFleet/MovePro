import Navbar from "@/components/navbar/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HomeIcon } from "lucide-react";

function InputWithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center border-2 rounded-lg p-10 border-black  shadow-md transition-transform transform  hover:scale-105 mt-40 gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" placeholder="password" />
      <Button className="mt-4">Sign Up</Button>
    </div>
  )
}

const SignUp = () => {
  return ( 
  <div>
    <Navbar />
    <Link href="/">
      <Button className="bg-purple-600 m-2 p-4">
        <HomeIcon className="text-2xl mr-2" />
        Home
      </Button>
    </Link>
    <div className="grid justify-center">
    <div
        className="
      font-medium 
      px-8
      text-5xl
      xl:text-6xl
      flex
      justify-center
      xl:pt-4
      text-center
      "
      >
        Sign up
    </div>
      <InputWithLabel />
    </div>
  </div> );
}
 
export default SignUp;