"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import DropDownMenu from "./drop-down-menu";
import { X, AlignJustify } from "lucide-react";
import Link from "next/link";

const ActionButtons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="pr-2">
      <div className="items-center justify-center flex">
        <div className="flex xl:space-x-4">
          <Link href={"/Our-Product"} className="hidden lg:flex items-center">
            <Button
              variant={"outline"}
              className="hidden lg:flex items-center border-none text-md"
            >
              View our Product
            </Button>
          </Link>
        </div>

        <div className="font-thin lg:flex items-center hidden">|</div>
        <div className="flex lg:space-x-4 items-center pr-4">
          <div>
            <Link href={"/Sign-In"} className="hidden lg:flex items-center">
              <Button
                variant={"outline"}
                className="hidden lg:flex items-center border-none text-md"
              >
                Log in
              </Button>
            </Link>
          </div>
          <div>
            <Link href={"/Sign-Up"} className="hidden lg:flex items-center">
              <Button 
              className="hidden lg:flex items-center border-none text-md text-white bg-purple-600">
                Sign up
              </Button>
            </Link>
          </div>
        </div>

        {isDropdownVisible && (
          <div onClick={toggleDropdown} className="rounded-full xl:hidden">
            <X className="h-5 w-5 items-center justify-center" />
          </div>
        )}

        {!isDropdownVisible && (
          <div onClick={toggleDropdown} className="flex lg:hidden">
            <AlignJustify className="h-5 w-5 items-center justify-center mr-2" />
          </div>
        )}

        {isDropdownVisible && <DropDownMenu onClose={closeDropdown} />}
      </div>
    </div>
  );
};

export default ActionButtons;
