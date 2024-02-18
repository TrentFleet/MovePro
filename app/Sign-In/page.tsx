import Navbar from "@/components/navbar/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HomeIcon } from "lucide-react";
import React from "react";

function InputWithLabel() {
  const inputs = [
    { id: 'email', type: 'email', placeholder: 'Email' },
    { id: 'password', type: 'password', placeholder: 'Password' },
  ];

  return (
    <div className="grid w-full max-w-sm items-center border-2 rounded-lg p-10 border-black  shadow-md transition-transform transform  hover:scale-105 mt-20 gap-1.5">
      {inputs.map((input) => (
        <React.Fragment key={input.id}>
          <Label htmlFor={input.id}>{input.placeholder}</Label>
          <Input type={input.type} id={input.id} placeholder={input.placeholder} />
        </React.Fragment>
      ))}
      <Button className="mt-4">Sign In</Button>
    </div>
  );
}

const SignIn = () => {
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
        Sign In
    </div>
      <InputWithLabel />
    </div>
  </div> );
}

export default SignIn;