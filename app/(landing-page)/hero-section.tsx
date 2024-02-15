"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { PiArrowRight, PiSparkleLight } from "react-icons/pi";

const HeroSection = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="md:items-center flex flex-col">
      <div
        className="
      font-medium 
      2xl:w-1/3
      md:w-2/3
      lg:px-0
      px-8
      text-5xl
      xl:text-6xl
      flex
      justify-center
      xl:pt-14
      text-center
      pt-6"
      >
        Generate, Workouts, Meal plans, Find Purpose.
      </div>

      <p className="text-2xl pt-4 mt-2 text-center w-2/3 mx-auto text-purple-600">
        Crush Your Goals, Get Fit, and Stay Healthy with MovePro.
      </p>
      <div className="flex gap-4 pt-6 items-center justify-center">
        <Link href={"/Sign-Up"}>
          <Button className="py-1">
            <div className="flex items-center justify-center">
              <div className="text-lg">Join MovePro</div>
              <div>
                <PiArrowRight />
              </div>
            </div>
          </Button>
        </Link>
      </div>

      

    </div>
  );
};

export default HeroSection;
