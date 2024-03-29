"use client"

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Dumbbell, Flame, Calendar, MedalIcon } from "lucide-react";

const tabs = [
  {
    icon: <Dumbbell size={40} className="text-black" />,
    name: "Step 1: Generate a Warm up",
  },
  {
    icon: <Flame size={40} className="text-red-600" />,
    name: "Step 2: Create the Workout",
  },
  {
    icon: <MedalIcon size={40} className="text-green-600" />,
    name: "Step 3: Complete the Workout",
  },
];

const ThirdSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsVisible(offset > 200); // Adjust the offset value based on when you want the effect to trigger
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="grid justify-center items-center m-4 px-4 md:px-0 xl:w-3/4 mx-auto 2xl:w-[55%] ">
      <div className={`pt-8 m-8 lg:pt-0 text-3xl xl:text-5xl font-medium text-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        Create your own workout in minutes
      </div>

      <div className="grid grid-cols-3 justify-between gap-10 p-2">
        {tabs.map((tab) => (
          <motion.div
            key={tab.name}
            className={`
              flex 
              p-2
              cursor-pointer
            
              ${
                activeTab.name === tab.name
                  ? "rounded-md bg-purple-200 md:bg-purple-100 border-purple-400 items-center justify-center flex-col flex"
                  : "md:bg-purple-200 rounded-md xl:rounded-xl p-2 items-center justify-center hover:bg-purple-100"
              } `}
            onClick={() => setActiveTab(tab)}
          >
            <div className="flex flex-col items-center md:justify-center">
              {tab.icon}
              <div className="font-medium text-sm xl:text-lg mt-1">
                {tab.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={`py-4 lg:w-1/2 lg:px-8 justify-center items-center mx-auto flex flex-col xl:px-0 md:px-8 w-3/4 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {activeTab && (
          <div className="flex justify-center items-center flex-col">
            <p className="text-lg">
              MovePro is designed to simplify your workout routine:
            </p>
            <p className="text-lg text-purple-600 font-semibold mt-4">
              {activeTab.name === "Step 1: Generate a Warm up" && (
                "Generate a personalized warm-up tailored to your workout duration and preferences."
              )}
              {activeTab.name === "Step 2: Create the Workout" && (
                "Create a customized workout routine based on your fitness goals, type of exercise, and intensity."
              )}
              {activeTab.name === "Step 3: Complete the Workout" && (
                "Follow your generated workout plan, log your progress, and achieve your fitness milestones."
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThirdSection;
