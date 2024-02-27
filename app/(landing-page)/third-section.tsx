"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";

import { Calendar, Dumbbell, Flame } from "lucide-react";

const tabs = [
  {
    icon: <Dumbbell />,
    name: "Step 1: Generate a Warm up",
    image: "/assets/1.png",
  },
  {
    icon: <Flame />,
    name: "Step 2: Create the Workout",
    image: "/assets/2.png",
  },
  {
    icon: <Calendar />,
    name: "Step 3: Complete the Workout",
    image: "/assets/3.png",
  },
];

const ThirdSection = () => {
  const ref = useRef(null);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className=" relative flex justify-center items-center flex-col m-8 px-4 md:px-0 xl:w-3/4 mx-auto 2xl:w-[55%] ">
      <div className="pt-8 m-8 lg:pt-0 text-3xl xl:text-5xl font-medium text-center">
        How MovePro works
      </div>

      <div className="flex flex-row justify-between gap-10 p-2">
        {tabs.map((tab) => (
          <motion.div
            key={tab.name}
            className={`
              flex 
              md:p-4
             
      
                cursor-pointer
        
                ${
                  activeTab.name === tab.name
                    ? "rounded-md md:rounded-xl bg-purple-300 md:bg-purple-300 border-gray-200 md:border items-center justify-center flex-col flex p-4"
                    : "md:bg-[#f6f5f4] rounded-md xl:rounded-xl p-4 items-center justify-center hover:bg-slate-300"
                } `}
            onClick={() => setActiveTab(tab)}
          >
            <div className="flex flex-col items-center md:justify-center">
              <div className="hidden md:flex text-4xl">{tab.icon}</div>
              <div className="font-medium text-sm  xl:text-lg mt-1">
                {tab.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Display content based on the active tab */}
      <div className="py-4 lg:w-1/2   lg:px-8 xl:px-0 md:px-8  w-3/4">
        {activeTab && (
          <div className=" flex justify-center items-center flex-col  ">
            <Image
              src={activeTab.image}
              width={300}
              height={300}
              alt="logo"
              className="
                w-full
             border
             p-10
             xl:p-20
             rounded-xl
          
                "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ThirdSection;
